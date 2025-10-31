<!-- .vitepress/theme/components/PostList.vue -->
<template>
  <div class="post-list">
    <article v-for="post in posts" :key="post.url" class="post-item">
      <h3>
        <a :href="post.url">{{ post.title }}</a>
      </h3>
      <div class="post-meta">
        <span class="date">{{ formatDate(post.date) }}</span>
        <span v-if="post.category" class="category">
          <a :href="`/categories?cat=${post.category}`">{{ post.category }}</a>
        </span>
        <span v-if="post.tags" class="tags">
          <a 
            v-for="tag in post.tags" 
            :key="tag"
            :href="`/tags?tag=${tag}`"
            class="tag"
          >
            #{{ tag }}
          </a>
        </span>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '../posts.data'

defineProps<{
  posts: Post[]
}>()

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('zh-CN')
}
</script>

<style scoped>
.post-list {
  margin-top: 2rem;
}

.post-item {
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.post-item h3 {
  margin: 0 0 0.5rem;
  font-size: 1.4rem;
}

.post-item h3 a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.post-item h3 a:hover {
  color: var(--vp-c-brand);
}

.post-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.category a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  color: var(--vp-c-text-2);
  text-decoration: none;
  padding: 0.2rem 0.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
}

.tag:hover {
  color: var(--vp-c-brand);
}
</style>