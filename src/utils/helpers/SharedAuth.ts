/**
 * Shared Auth Utility
 *
 * This utility provides session sharing between the Educare app and AboutUs static pages app.
 * Both apps must be on the same domain (e.g., educareskill.com) for localStorage sharing.
 *
 * The Educare app sets 'educare_shared_auth' in localStorage on login
 * and removes it on logout.
 *
 * Logout is synced across subdomains using BroadcastChannel.
 */

export interface SharedAuthUser {
  user: {
    id: string;
    user_identifier?: string;
    email?: string;
    mobile_no?: string;
    created_at?: string;
    updated_at?: string;
  };
  profile: {
    id: string;
    name?: string;
    gender?: string;
    profile_picture?: string;
    created_at?: string;
    updated_at?: string;
  };
  expires_in?: string | number; // Can be ISO date string or Unix timestamp
}

const SHARED_AUTH_KEY = "educare_shared_auth";
console.log(SHARED_AUTH_KEY, 'SHARED_AUTH_KEY')
const AUTH_CHANNEL = "educare_auth_channel";
const MAIN_APP_URL =
  process.env.REACT_APP_MAIN_APP_URL || "https://educareskill.com";

/**
 * Clear shared auth from localStorage (this subdomain's copy)
 */
export const clearSharedAuthUser = (): void => {
  localStorage.removeItem(SHARED_AUTH_KEY);
};

/**
 * Get the shared auth user from localStorage
 * Returns null if not authenticated or token is expired
 * Also clears stale/expired data instead of silently ignoring it
 */
export const getSharedAuthUser = (): SharedAuthUser | null => {
  try {
    const data = localStorage.getItem(SHARED_AUTH_KEY);
    if (!data) return null;

    const authData = JSON.parse(data) as SharedAuthUser;

    // Check if token is expired
    if (authData.expires_in) {
      const currentTime = Date.now();
      // Handle both ISO date string and Unix timestamp formats
      const expiresTime =
        typeof authData.expires_in === "string"
          ? new Date(authData.expires_in).getTime()
          : authData.expires_in * 1000;

      if (expiresTime < currentTime) {
        // Clear expired data so it doesn't linger on subdomain
        clearSharedAuthUser();
        return null;
      }
    }

    return authData;
  } catch {
    clearSharedAuthUser(); // Clear corrupt data
    return null;
  }
};

/**
 * Listen for logout events broadcast from the main app or other subdomains.
 * Call this once on app init (e.g. inside AuthContext useEffect).
 * Returns a cleanup function — call it on unmount.
 *
 * @example
 * useEffect(() => {
 *   const cleanup = listenForAuthChanges(() => setUser(null));
 *   return cleanup;
 * }, []);
 */
export const listenForAuthChanges = (onLogout: () => void): (() => void) => {
  try {
    const channel = new BroadcastChannel(AUTH_CHANNEL);

    channel.onmessage = (event) => {
      if (event.data?.type === "LOGOUT") {
        clearSharedAuthUser(); // Clear this subdomain's localStorage copy
        onLogout();
      }
    };

    // Return cleanup to close channel on component unmount
    return () => channel.close();
  } catch {
    // BroadcastChannel not supported — degrade gracefully
    return () => {};
  }
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return getSharedAuthUser() !== null;
};

/**
 * Get user display name
 */
export const getUserDisplayName = (): string | null => {
  const auth = getSharedAuthUser();
  return auth?.profile?.name || null;
};

/**
 * Get user profile picture URL
 */
export const getUserProfilePicture = (): string | null => {
  const auth = getSharedAuthUser();
  return auth?.profile?.profile_picture || null;
};

/**
 * Get user initials for avatar fallback
 */
export const getUserInitials = (): string => {
  const name = getUserDisplayName();
  if (!name) return "?";
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
};

/**
 * Redirect to Educare app home
 */
export const redirectToHome = (): void => {
  window.location.href = MAIN_APP_URL;
};

/**
 * Redirect to Educare app login
 */
export const redirectToLogin = (returnUrl?: string): void => {
  const url = returnUrl || window.location.href;
  window.location.href = `${MAIN_APP_URL}/login?redirect=${encodeURIComponent(url)}`;
};

/**
 * Redirect to Educare app signup
 */
export const redirectToSignup = (): void => {
  window.location.href = `${MAIN_APP_URL}/signup`;
};

/**
 * Redirect to Educare app profile
 */
export const redirectToProfile = (): void => {
  window.location.href = `${MAIN_APP_URL}/profile`;
};