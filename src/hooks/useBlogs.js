import { useEffect, useState } from "react";
import blogService from "../api/services/blogService";

/**
 * The published articles, read from the API.
 *
 * The blog page renders the feature and the grid as two separate components,
 * and both want the whole list, so the request is shared: the first caller
 * starts it and the rest wait on the same promise. `refresh()` drops it.
 */
let pending = null;
let cache = null;

const CATEGORY_ORDER = [
  "Career Guide",
  "Industry News",
  "Study Tips",
  "Company News",
  "Training",
  "Technology",
];

function loadBlogs() {
  if (cache) return Promise.resolve(cache);
  if (!pending) {
    pending = blogService
      .getBlogs()
      .then((res) => {
        const payload = res?.data || {};
        cache = {
          blogs: payload.data || payload.blogs || [],
          counts: payload.categories || {},
        };
        return cache;
      })
      .catch((err) => {
        pending = null;
        throw err;
      });
  }
  return pending;
}

export function refreshBlogs() {
  cache = null;
  pending = null;
}

export default function useBlogs() {
  const [blogs, setBlogs] = useState(cache ? cache.blogs : []);
  const [counts, setCounts] = useState(cache ? cache.counts : {});
  const [loading, setLoading] = useState(!cache);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    loadBlogs()
      .then((data) => {
        if (!active) return;
        setBlogs(data.blogs);
        setCounts(data.counts);
        setLoading(false);
      })
      .catch((err) => {
        if (!active) return;
        setError(err);
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  // "All" first, then the categories in the order the filter bar shows them.
  const categories = [
    { name: "All", count: blogs.length },
    ...CATEGORY_ORDER.map((name) => ({ name, count: counts[name] || 0 })),
  ];

  return { blogs, categories, loading, error };
}
