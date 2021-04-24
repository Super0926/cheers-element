module.exports = {
  base: "/cheers-element/",
  title: "cheers-element",
  description: "cheers-element使用文档",
  markdown: {
    lineNumbers: true,
  },
  head: [
    ["link", {
      rel: "icon",
      href: "/assets/img/logo.png"
    }],
    ["meta", {
      name: "keywords",
      content: "cheers-element使用文档",
    }],
    ["meta", {
      name: "author",
      content: "钱华",
    }]
  ],
  logo: "/assets/img/logo.png",
  themeConfig: {
    nav: [{
        text: "首页",
        link: "/",
      },
      {
        text: "文档",
        link: "/cheers-element",
      },
      {
        text: "赞助",
        link: "/zanzhu",
      },
      {
        text: "建议",
        link: "/jy",
      },

      {
        text: "github",
        link: "https://github.com/Super0926/cheers-element",
      },
    ],
    sidebar: [
      "/cheers-element",
      "/cheers-form",
      "/cheers-table",
      "/cheers-paginations",
      "/cheers-search-bar",
      "/cheers-upload-file",
    ],
    lastUpdated: "更新时间",
  },
};