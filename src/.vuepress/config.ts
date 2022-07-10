import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Amos's Notes",
  description: "amos的学习生活笔记",

  base: "/",

  theme,
});
