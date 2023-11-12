export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"页面的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"页面的标题\",\"description\":\"页面的描述\"},\"headers\":[{\"level\":2,\"title\":\"你好世界\",\"slug\":\"你好世界\",\"link\":\"#你好世界\",\"children\":[]},{\"level\":2,\"title\":\"之间\",\"slug\":\"之间\",\"link\":\"#之间\",\"children\":[{\"level\":3,\"title\":\"你好\",\"slug\":\"你好\",\"link\":\"#你好\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
