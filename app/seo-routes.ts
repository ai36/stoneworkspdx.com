import routes from "./routes";

type RouteConfig = {
  id: string;
  file: string;
  path?: string;
};

export type SeoRoute = {
  path: string;
  priority: number;
  changefreq: "weekly" | "monthly" | "yearly";
};

function isSeoRoutePath(rawPath: string): boolean {
  // rawPath БЕЗ ведущего "/": например "services", "api/lead", "*", "robots.txt"
  if (rawPath === "*") return false;
  if (rawPath.startsWith("api/")) return false;
  if (rawPath === "robots.txt") return false;
  if (rawPath === "sitemap.xml") return false;
  if (rawPath.startsWith("privacy")) return false;
  if (rawPath.includes(":")) return false;
  return true;
}

export const seoRoutes: SeoRoute[] = (routes as readonly RouteConfig[])
  .flatMap((r) => {
    if (!r.path) {
      return [{ rawPath: "" }];
    }
    return [{ rawPath: r.path }];
  })
  .filter(({ rawPath }) => isSeoRoutePath(rawPath))
  .map(({ rawPath }) => {
    const path = rawPath === "" ? "/" : `/${rawPath}`;
    return {
      path,
      changefreq: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1.0 : 0.7,
    };
  });
