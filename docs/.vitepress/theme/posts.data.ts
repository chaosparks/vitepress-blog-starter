// .vitepress/theme/posts.data.ts
import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  date: string
  category?: string
  tags?: string[]
}

declare const data: Post[]
export { data }

// 匹配所有一级目录下的 md 文件
export default createContentLoader('*/**/*.md', {
    transform(rawData): Post[] {   
        
      const processed = rawData
        .map(({ url, frontmatter }) => ({
          title: frontmatter.title,
          url,
          date: frontmatter.date,
          category: frontmatter.category,
          tags: frontmatter.tags
        }))
        .filter(post => post.date) // 过滤掉没有日期的文章
        .sort((a, b) => +new Date(b.date) - +new Date(a.date))

        return processed        
    }
  })