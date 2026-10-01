import { Suspense, useState } from "react";
import useNearScreen from "../../hooks/useNearScreen";

/*
 * Renders `children` (usually a React.lazy section) only once the visitor is
 * within ~800px of it, so the first screen loads without the code and work of
 * everything further down. Until then a placeholder of about the section's
 * height keeps the page length stable; the swap happens off-screen, so nothing
 * the visitor sees moves.
 * `eager` renders straight away (e.g. when the page must scroll to a section).
 */
export default function LazySection({ children, minHeight = 600, eager = false }) {
  const [ref, near] = useNearScreen("800px");
  // Once eager, stay rendered even if the caller's flag later turns off.
  const [forced] = useState(eager);
  const placeholder = <div style={{ minHeight }} aria-hidden="true" data-lazy-section="" />;

  if (!near && !forced && !eager) {
    return <div ref={ref} style={{ minHeight }} aria-hidden="true" data-lazy-section="" />;
  }
  return <Suspense fallback={placeholder}>{children}</Suspense>;
}
