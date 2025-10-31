---
title: 标签
layout: doc
---

<script setup>
import { data as posts } from './.vitepress/theme/posts.data'
import { computed } from 'vue'

const tags = computed(() => {
  const tagMap = {}
  posts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => {
        if (!tagMap[tag]) {
          tagMap[tag] = []
        }
        tagMap[tag].push(post)
      })
    }
  })
  return tagMap
})

function formatDate(date) {
  if (!date) return '日期未知'
  
  const d = new Date(date)
  
  // 检查日期是否有效
  if (isNaN(d.getTime())) {
    console.warn('无效的日期格式：', date)
    return '日期格式错误'
  }
  
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}
</script>

# 标签云

<div class="tag-cloud">
  <div v-for="(posts, tag) in tags" :key="tag" class="tag-group">
    <h2>
      <span class="tag-icon">#</span>{{ tag }} 
      <span class="count">({{ posts.length }})</span>
    </h2>
    <ul>
      <li v-for="post in posts" :key="post.url">
        <a :href="post.url">{{ post.title }}</a>
        <span class="date">{{ formatDate(post.date) }}</span>
      </li>
    </ul>
  </div>
</div>


<style scoped>
.tag-cloud {
  margin-top: 2rem;
}

.tag-group {
  margin-bottom: 2.5rem;
}

.tag-group h2 {
  color: var(--vp-c-brand);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.tag-icon {
  opacity: 0.6;
  margin-right: 0.3rem;
}

.count {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  font-weight: normal;
}

.tag-group ul {
  list-style: none;
  padding-left: 1rem;
}

.tag-group li {
  padding: 0.4rem 0;
  display: flex;
  justify-content: space-between;
}

.tag-group li a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.tag-group li a:hover {
  color: var(--vp-c-brand);
}

.date {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>