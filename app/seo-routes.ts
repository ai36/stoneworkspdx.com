import routes from "./routes";

type RouteConfig = {
  id: string;
  path?: string;
  file: string;
};

type SeoRoute = {
  path: string;
  priority: number;
  changefreq: "weekly" | "monthly" | "yearly";
};

function isIndexRoute(route: RouteConfig) {
  return !route.path;
}

function isSeoPath(path: string) {
  return !path.startsWith("api/") && path !== "*" && !path.includes(":");
}

export const seoRoutes: SeoRoute[] = (routes as readonly RouteConfig[])
  .map((route) => {
    if (isIndexRoute(route)) {
      return { path: "/" };
    }

    return { path: `/${route.path}` };
  })
  .filter((r): r is { path: string } => isSeoPath(r.path))
  .map((r) => ({
    path: r.path,
    changefreq: r.path === "/" ? "weekly" : "monthly",
    priority: r.path === "/" ? 1.0 : 0.7,
  }));
