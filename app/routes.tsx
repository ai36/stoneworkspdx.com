import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("services", "routes/services.tsx"),
  route("portfolio", "routes/portfolio.tsx"),
  route("service-area", "routes/service-area.tsx"),
  route("contact", "routes/contact.tsx"),
  route("privacy", "routes/privacy.tsx"),

  // catch-all
  route("*", "routes/not-found.tsx"),
];
