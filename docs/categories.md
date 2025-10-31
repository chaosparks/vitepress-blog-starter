---
title: 文章分类
layout: doc
---

<script setup>
import { data as posts } from './.vitepress/theme/posts.data'
import CategoryList from './.vitepress/theme/components/CategoryList.vue'
</script>

# 文章分类

<CategoryList :posts="posts" />