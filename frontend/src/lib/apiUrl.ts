
export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  (window.location.hostname.includes("railway.app")
    ? "https://agentic-content-generator-production.up.railway.app"
    : "http://localhost:8000")
).replace(/\/+$/, "");

export function resolveApiUrl(url: string): string {
  if (!url) return "";

  // Keep absolute HTTP(S) URLs and blob URLs unchanged.
  if (/^(https?:\/\/|blob:)/i.test(url)) {
    return url;
  }

  // Join relative API paths to the configured backend URL.
  return `${API_BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}
