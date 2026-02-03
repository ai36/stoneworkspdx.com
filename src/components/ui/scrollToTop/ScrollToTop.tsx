import { useEffect } from "react";
import { useLocation, useNavigation } from "react-router";

export const ScrollToTop = () => {
  const location = useLocation();
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state !== "idle") return;
    if (location.hash) return;

    const el = document.scrollingElement || document.documentElement;

    requestAnimationFrame(() => {
      el.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      requestAnimationFrame(() => {
        el.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      });
    });
  }, [location.key, location.hash, navigation.state]);

  return null;
}
