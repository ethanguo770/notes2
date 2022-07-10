import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";

export default hopeTheme({
  hostname: "http://zhixiankwok.github.io",

  author: {
    name: "Amos",
    url: "http://zhixiankwok.github.io",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "ZhixianKwok/notes2",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  footer: "",

  displayFooter: false,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "野生前端开发者",
    intro: "https://github.com/ZhixianKwok",
    medias: {
      GitHub: "https://github.com/ZhixianKwok",
      Gmail: "zhixiankwok@gmail.com",
      QQ: "848708851",
      Wechat: "gzx848708851",
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "ZhixianKwok/notes2",
      repoId: "R_kgDOHooFNg",
      category: "Announcements",
      categoryId: "DIC_kwDOHooFNs4CQIsW",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
