import { useLocation } from "react-router";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export function usePageView() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path: location.pathname + location.search,
    });
  }, [location]);
}