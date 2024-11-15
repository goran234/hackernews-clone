<template>
  <div id="post-list" class="post-list">
      <Post v-for="post in posts" :post="post"></Post>
  </div>
</template>

<script lang="ts" setup>
import type {PostHit} from "@/models/post-response";
import Post from "@/homepage/components/Post.vue";

const props = defineProps<{posts: PostHit[]}>()

</script>

<style scoped>

</style>