<template>
  <div class="post">
    <div @click="router.push({name: 'show-post', params: {id: post.objectID}})" class="post-data">
      <div class="link">
        <a :href="post.url" target="_blank">{{ post.title }}</a>
      </div>
      <div class="info">
        <div>Points: {{ post.points }}</div>
        <div>Author: {{ post.author }}</div>
        <div>Created: {{ post.created_at }}</div>
        <div class="comment-count" @click.stop="loadComments()"> Comments: {{ post.num_comments }}</div>
      </div>
    </div>
    <div class="comment">
      <Comment :is-single-comment="false" v-show="!isChildOfCurrentComment(comment)" :comments="comments" :key="comment.objectID" :comment="comment" v-for="comment in comments">
      </Comment>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {PostHit} from "@/models/post-response";
import {computed, type Ref, ref} from "vue";
import {BackendApi} from "@/services/backend-api";
import type {CommentHit} from "@/models/comment-response";
import Comment from "@/homepage/components/Comment.vue";
import {useRouter} from "vue-router";

const props = defineProps<{post: PostHit}>()

const comments: Ref<CommentHit[]> = ref([]);

const router = useRouter();

function loadComments() {
  BackendApi.getComments(props.post.story_id).then(data => {
    comments.value = data.hits;
  })
}

function isChildOfCurrentComment(inputComment: CommentHit) {
  return comments.value.find(comment => comment.children?.includes(parseInt(inputComment.objectID)));
}
</script>

<style scoped>

.comment-count {
  cursor: pointer;
}

.comment-count:hover {
  background-color: #444444;
}
</style>