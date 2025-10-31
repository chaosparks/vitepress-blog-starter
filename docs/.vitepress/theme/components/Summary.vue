<!-- .vitepress/theme/components/Summary.vue -->
<template>
  <div class="summary-box">
    <button @click="toggleSummary" class="summary-trigger">
      <span class="icon">{{ isOpen ? '📖' : '💡' }}</span>
      <span class="text">{{ isOpen ? '收起总结' : '查看小节总结' }}</span>
      <span class="arrow" :class="{ open: isOpen }">▼</span>
    </button>
    
    <Transition name="slide">
      <div v-if="isOpen" class="summary-content">
        <div class="summary-header">
          <span class="title">📝 小节总结</span>
        </div>
        <div class="summary-body">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const toggleSummary = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.summary-box {
  margin: 2rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.summary-trigger {
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: var(--vp-c-text-1);
  transition: all 0.3s;
}

.summary-trigger:hover {
  background: var(--vp-c-bg);
}

.summary-trigger .icon {
  font-size: 1.2rem;
}

.summary-trigger .text {
  flex: 1;
  text-align: left;
  font-weight: 500;
}

.summary-trigger .arrow {
  transition: transform 0.3s;
  color: var(--vp-c-text-2);
}

.summary-trigger .arrow.open {
  transform: rotate(180deg);
}

.summary-content {
  border-top: 1px solid var(--vp-c-divider);
}

.summary-header {
  padding: 1rem 1.5rem;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}

.summary-header .title {
  font-weight: 600;
  color: var(--vp-c-brand);
}

.summary-body {
  padding: 1.5rem;
  line-height: 1.7;
  color: var(--vp-c-text-1);
}

/* 折叠动画 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 1000px;
  opacity: 1;
}

/* 深色模式适配 */
.dark .summary-box {
  background: var(--vp-c-bg-soft);
}
</style>