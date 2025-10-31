<template>
  <div class="category-list">
    <div v-for="(posts, category) in categories" :key="category" class="category-group">
      <h2>{{ category }} ({{ posts.length }})</h2>
      <ul>
        <li v-for="post in posts" :key="post.url">
          <a :href="post.url">{{ post.title }}</a>
          <span class="date">{{ formatDate(post.date) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Post } from '../posts.data'

const props = defineProps<{
  posts: Post[]
}>()

const categories = computed(() => {
  const cats: Record<string, Post[]> = {}
  props.posts.forEach(post => {
    if (post.category) {
      if (!cats[post.category]) {
        cats[post.category] = []
      }
      cats[post.category].push(post)
    }
  })
  return cats
})

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('zh-CN')
}
</script>

<style scoped>
.category-group {
  margin-bottom: 3rem;
}

.category-group h2 {
  color: var(--vp-c-brand);
  border-bottom: 2px solid var(--vp-c-brand);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.category-group ul {
  list-style: none;
  padding: 0;
}

.category-group li {
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category-group li a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.category-group li a:hover {
  color: var(--vp-c-brand);
}

.date {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>