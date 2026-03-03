const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const BUILD_DIR = path.join(__dirname, "..", "build");
const COMPRESSIBLE = [".js", ".css", ".html", ".json", ".svg", ".xml", ".txt"];

let totalOriginal = 0;
let totalGzipped = 0;
let count = 0;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (
      COMPRESSIBLE.includes(path.extname(entry.name).toLowerCase()) &&
      !entry.name.endsWith(".gz")
    ) {
      const content = fs.readFileSync(fullPath);
      const compressed = zlib.gzipSync(content, { level: 9 });

      // Only write .gz if it's actually smaller
      if (compressed.length < content.length) {
        fs.writeFileSync(fullPath + ".gz", compressed);
        totalOriginal += content.length;
        totalGzipped += compressed.length;
        count++;
      }
    }
  }
}

if (!fs.existsSync(BUILD_DIR)) {
  console.error("Build directory not found. Run 'npm run build' first.");
  process.exit(1);
}

console.log("Gzipping build assets...");
walk(BUILD_DIR);

console.log(
  `Compressed ${count} files: ${(totalOriginal / 1024).toFixed(0)} KB -> ${(totalGzipped / 1024).toFixed(0)} KB (${(((totalOriginal - totalGzipped) / totalOriginal) * 100).toFixed(1)}% smaller)`
);
