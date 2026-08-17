// Whether the current connection is too slow/constrained to be worth
// spending bytes on a decorative WebGL/canvas background. navigator.connection
// is Chromium-only, so this is a bonus where the browser exposes it, not a
// requirement anywhere else - browsers without it always get the full
// experience. saveData covers anyone who's explicitly asked their browser
// to go easy on bytes, regardless of their actual link speed.
export function isSlowConnection() {
  if (typeof navigator === 'undefined') return false;
  const conn =
    navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (!conn) return false;
  if (conn.saveData) return true;
  return ['slow-2g', '2g', '3g'].includes(conn.effectiveType);
}
