<template>
  <div  class="comment">
    <div class="author">
      {{ props.comment.author }}
    </div>

    <div class="content">
      {{ commentText }}
    </div>

    <Comment :is-single-comment="props.isSingleComment" :key="comment.objectID" :comments="props.comments" :comment="comment" v-for="comment in childComments"></Comment>
  </div>
</template>

<script lang="ts" setup>
import type {CommentHit} from "@/models/comment-response";
import {computed, type ComputedRef} from "vue";
import type {SingleItem} from "@/models/single-item";
const props = defineProps<{
  comment: CommentHit | SingleItem,
  comments: CommentHit[] | SingleItem[],
  isSingleComment: boolean
}>()

const childComments: ComputedRef<CommentHit[]> = computed(() => {
  if (props.isSingleComment) {
    return props.comment.children as unknown as CommentHit[];
  }

  //@ts-ignore
  return props.comment.children?.map((id: number) => props.comments.find(comment => comment.objectID == id))
      .filter(comment => comment) as CommentHit[];
})

const commentText = computed(() => {
  //@ts-ignore
  return props.comment.comment_text || props.comment.text
})

</script>

<style scoped>
.comment {
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.author {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.content {
  color: #555;
  line-height: 1.5;
}
</style>