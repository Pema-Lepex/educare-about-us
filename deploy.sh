#!/usr/bin/env bash
set -euo pipefail

# ─────────────────────────────────────────────────────────
# Educare AboutUs – S3 + CloudFront Deploy Script
#
# Config is loaded from .env.deploy in project root.
# You can override any value with env vars:
#   S3_BUCKET=other-bucket bash deploy.sh
# ─────────────────────────────────────────────────────────

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="${SCRIPT_DIR}/.env.deploy"

if [ -f "$ENV_FILE" ]; then
    echo "Loading config from .env.deploy..."
    set -a
    source "$ENV_FILE"
    set +a
else
    echo "WARNING: .env.deploy not found – relying on env vars"
fi

: "${S3_BUCKET:?'Set S3_BUCKET in .env.deploy or as env var'}"
: "${CF_DISTRIBUTION_ID:?'Set CF_DISTRIBUTION_ID in .env.deploy or as env var'}"

AWS_PROFILE="${AWS_PROFILE:-default}"
BUILD_DIR="${BUILD_DIR:-build}"
S3_PREFIX="${S3_PREFIX:-educare-aboutus}"
S3_DEST="s3://${S3_BUCKET}/${S3_PREFIX}"
AWS="aws --profile ${AWS_PROFILE}"

echo "========================================="
echo " Deploying Educare AboutUs Frontend"
echo " Bucket:       ${S3_BUCKET}"
echo " Prefix:       ${S3_PREFIX}"
echo " Destination:  ${S3_DEST}"
echo " Distribution: ${CF_DISTRIBUTION_ID}"
echo "========================================="

# ── 0. Verify build exists ──────────────────────────────
if [ ! -d "$BUILD_DIR" ]; then
    echo "ERROR: Build directory '${BUILD_DIR}' not found."
    echo "Run 'npm run build' first."
    exit 1
fi

# ── 1. Hashed JS files (immutable, cache 1 year) ────────
echo ""
echo "▶ [1/7] Uploading JS files (cache 1y, immutable)..."
$AWS s3 cp "${BUILD_DIR}/static/js/" "${S3_DEST}/static/js/" \
    --recursive \
    --cache-control "public, max-age=31536000, immutable" \
    --content-type "application/javascript" \
    --exclude "*" \
    --include "*.js"

# ── 2. Hashed CSS files (immutable, cache 1 year) ───────
echo ""
echo "▶ [2/7] Uploading CSS files (cache 1y, immutable)..."
$AWS s3 cp "${BUILD_DIR}/static/css/" "${S3_DEST}/static/css/" \
    --recursive \
    --cache-control "public, max-age=31536000, immutable" \
    --content-type "text/css" \
    --exclude "*" \
    --include "*.css"

# ── 3. Hashed media – fonts, images bundled by webpack ──
echo ""
echo "▶ [3/7] Uploading media assets (cache 1y, immutable)..."
$AWS s3 cp "${BUILD_DIR}/static/media/" "${S3_DEST}/static/media/" \
    --recursive \
    --cache-control "public, max-age=31536000, immutable"

# ── 4. Root assets (favicon, og-image, manifest, etc.) ──
echo ""
echo "▶ [4/7] Uploading root assets (cache 1d, revalidate)..."
$AWS s3 cp "${BUILD_DIR}/" "${S3_DEST}/" \
    --recursive \
    --cache-control "public, max-age=86400, must-revalidate" \
    --exclude "static/*" \
    --exclude "index.html" \
    --exclude "*.gz"

# ── 5. index.html (never cache) ─────────────────────────
echo ""
echo "▶ [5/7] Uploading index.html (no-cache)..."
$AWS s3 cp "${BUILD_DIR}/index.html" "${S3_DEST}/index.html" \
    --cache-control "no-cache, no-store, must-revalidate" \
    --content-type "text/html; charset=utf-8"

# ── 6. Pre-compressed .gz files with Content-Encoding ───
echo ""
echo "▶ [6/7] Uploading pre-compressed .gz files..."
find "${BUILD_DIR}" -name "*.gz" | while read -r gz_file; do
    original="${gz_file%.gz}"
    rel_path="${original#${BUILD_DIR}/}"

    case "$rel_path" in
        *.js)   ct="application/javascript" ;;
        *.css)  ct="text/css" ;;
        *.html) ct="text/html; charset=utf-8" ;;
        *.svg)  ct="image/svg+xml" ;;
        *.json) ct="application/json" ;;
        *)      ct="application/octet-stream" ;;
    esac

    if [[ "$rel_path" == static/* ]]; then
        cc="public, max-age=31536000, immutable"
    elif [[ "$rel_path" == "index.html" ]]; then
        cc="no-cache, no-store, must-revalidate"
    else
        cc="public, max-age=86400, must-revalidate"
    fi

    echo "  gz: ${rel_path}"
    $AWS s3 cp "$gz_file" "${S3_DEST}/${rel_path}" \
        --cache-control "$cc" \
        --content-type "$ct" \
        --content-encoding "gzip" \
        --metadata-directive REPLACE
done

# ── 7. Remove stale files from S3 that no longer exist ──
echo ""
echo "▶ [7/7] Cleaning up stale files..."
$AWS s3 sync "${BUILD_DIR}/" "${S3_DEST}/" \
    --delete \
    --exclude "*.gz" \
    --size-only

# ── 8. CloudFront invalidation ──────────────────────────
echo ""
echo "▶ Creating CloudFront invalidation..."
INVALIDATION_ID=$($AWS cloudfront create-invalidation \
    --distribution-id "${CF_DISTRIBUTION_ID}" \
    --paths "/${S3_PREFIX}/index.html" "/${S3_PREFIX}/manifest.json" "/${S3_PREFIX}/asset-manifest.json" \
    --query 'Invalidation.Id' \
    --output text)

echo "  Invalidation ID: ${INVALIDATION_ID}"
echo ""
echo "========================================="
echo " Deploy complete!"
echo " CloudFront invalidation in progress."
echo "========================================="
