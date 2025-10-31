// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import PostList from './components/PostList.vue'
import CategoryList from './components/CategoryList.vue'
import Summary from './components/Summary.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,  // 使用自定义布局
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('PostList', PostList)
    app.component('CategoryList', CategoryList)
    app.component('Summary', Summary)
  }
}