<template>
  <div v-if="item" class="post">
    <div class="post-data">
      <div class="link">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </div>
      <div class="info">
        <div>Points: {{ item.points }}</div>
        <div>Author: {{ item.author }}</div>
        <div>Created: {{ item.created_at }}</div>

      </div>
    </div>
    <div class="comment">
      <Comment v-for="nestedItem in item.children" :comment="nestedItem" :comments="[]" :is-single-comment="true"></Comment>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {BackendApi} from "@/services/backend-api";
  import {useRoute} from "vue-router";
  import type {SingleItem} from "@/models/single-item";
  import Comment from "@/homepage/components/Comment.vue";
  import {reactive} from "vue";

  let item: SingleItem = reactive({}) as SingleItem;
  const route = useRoute();
  BackendApi.singleItem(route.params.id as string).then(data => {
    Object.assign(item, data);
  })
</script>

<style scoped>

</style>