import axiosInstance from "./axiosInstance";

/*
 * The public lists (courses, licences, locations) are requested by several parts
 * of one page at once: the page itself, the footer, modals. Identical requests
 * made within a few minutes share one response instead of downloading it again.
 * Callers must treat the response as read-only (copy before sorting).
 */
const TTL = 5 * 60 * 1000;
const cache = new Map();

export default function cachedGet(url, params = {}) {
  const key = `${url}?${JSON.stringify(params)}`;
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < TTL) return hit.promise;

  const promise = axiosInstance.get(url, { params }).catch((err) => {
    cache.delete(key); // let the next caller try again
    throw err;
  });
  cache.set(key, { at: Date.now(), promise });
  return promise;
}
