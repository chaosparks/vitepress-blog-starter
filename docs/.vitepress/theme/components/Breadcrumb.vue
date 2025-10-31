<!-- .vitepress/theme/components/Breadcrumb.vue -->
<template>
  <nav v-if="breadcrumbs.length > 1" class="breadcrumb" aria-label="Breadcrumb">
    <ol>
      <li v-for="(item, index) in breadcrumbs" :key="index">
        <a v-if="item.link && index < breadcrumbs.length - 1" :href="item.link">
          {{ item.text }}
        </a>
        <span v-else class="current">{{ item.text }}</span>
        <span v-if="index < breadcrumbs.length - 1" class="separator">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

const route = useRoute()
const { frontmatter } = useData()

interface BreadcrumbItem {
  text: string
  link?: string
}

const breadcrumbs = computed<BreadcrumbItem[]>(() => {

  // 如果 frontmatter 中设置了 breadcrumb: false，则不显示
  if (frontmatter.value.breadcrumb === false) {
    return []
  }

  const path = route.path
  const parts = path.split('/').filter(Boolean)
  
  // 总是从首页开始
  const items: BreadcrumbItem[] = [{ text: '首页', link: '/' }]
  
  // 如果是首页，不显示面包屑
  if (parts.length === 0) {
    return []
  }
  
  let currentPath = ''
  parts.forEach((part, index) => {
    currentPath += `/${part}`
    
    // 移除 .html 后缀
    const cleanPart = part.replace('.html', '')
    
    // 最后一项（当前页面）
    const isLast = index === parts.length - 1
    
    // 获取友好的名称
    let text = cleanPart
    
    // 尝试从路由名称映射获取中文名
    const nameMap: Record<string, string> = {
      'posts': '文章',
      'categories': '分类',
      'tags': '标签',
      'java': 'Java',
      'python': 'Python',
      'frontend': '前端',
      'about': '关于'
    }
    
    text = nameMap[cleanPart] || cleanPart
    
    // 如果是当前页面且有标题，使用标题
    if (isLast && frontmatter.value.title) {
      text = frontmatter.value.title
    }
    
    items.push({
      text: text,
      link: isLast ? undefined : currentPath
    })
  })
  
  return items
})
</script>

<style scoped>
.breadcrumb {
  padding: 1rem 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0.5rem;
}

.breadcrumb li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb a {
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb a:hover {
  color: var(--vp-c-brand-dark);
  text-decoration: underline;
}

.breadcrumb .current {
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.separator {
  color: var(--vp-c-text-3);
  user-select: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .breadcrumb {
    font-size: 0.8rem;
    padding: 0.75rem 0;
  }
}
</style>