import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端",
    icon: "safari",
    link: "/frontend/",
  },
  {
    text: "后端",
    icon: "java",
    link: "/backend/",
  },
  {
    text: "GIS",
    icon: "sitemap",
    link: "/gis/",
  },
  {
    text: "其他",
    icon: "others",
    link: "/other/",
  },
  {
    text: "使用指南",
    icon: "creative",
    link: "/guide/",
  },
]);
