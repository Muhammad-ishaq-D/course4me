import { useEffect, useRef, useState } from "react";

/*
 * True once the element behind `ref` comes within `margin` of the screen (then
 * stays true). Used to load data for sections further down a page only when
 * they are about to be seen, so they do not slow down the first screen.
 */
export default function useNearScreen(margin = "800px") {
  const ref = useRef(null);
  // Without IntersectionObserver (very old browsers) everything loads at once.
  const [near, setNear] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const el = ref.current;
    if (near || !el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: `${margin} 0px` },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [near, margin]);

  return [ref, near];
}
