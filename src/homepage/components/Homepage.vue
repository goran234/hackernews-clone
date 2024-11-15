<template>
  <div class="container">
      <Sidebar @change-category="changeCategory"></Sidebar>

    <div class="main">
      <div>
        <Header @input-change="search"></Header>
        <div id="illusion" class="post-list"></div>
        <PostList :posts="posts"></PostList>
      </div>


      <div ref="scrollTrigger" class="scroll-trigger"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "@/homepage/components/Sidebar.vue";
import Header from "@/homepage/components/Header.vue";
import PostList from "@/homepage/components/PostList.vue";
import {computed, type ComputedRef, onMounted, reactive, ref, type Ref} from "vue";
import {BackendApi} from "@/services/backend-api";
import type {PostHit, PostResponse} from "@/models/post-response";

const searchParams = reactive({
  tags: 'story',
  query: '',
  page: 1,
  hitsPerPage: 20
})

let response = reactive({}) as PostResponse;
let isLoading = ref(false) ;
const posts: ComputedRef<PostHit[]> = computed(() => response?.hits || []);

const scrollTrigger = ref(null);

function search(query: string): void {
  Object.assign(searchParams, {
    query: query,
    page: 1,
    hitsPerPage: 20
  })

  fetchPosts(
      () => document!.querySelector('#illusion')!.innerHTML = '',
  );
}

function incrementPage(): void {
  if (isLoading.value) return;
  searchParams.page += 1;
  fetchPosts(
      handlePreviousPage,
      () => {
        document!.querySelector('#post-list')!.scrollIntoView();
      }
  );
}

function fetchPosts(preprocess?: () => void, postprocess?: () => void): void {
  isLoading.value = true;
  BackendApi.getPosts({...searchParams})
      .then(res => {
        if (preprocess) preprocess()
        Object.assign(response, res);
        if (postprocess) postprocess()
      })
      .finally(() => isLoading.value = false);
}

function handlePreviousPage(): void {
  const element = document.querySelector('#post-list');
  if (element) {
    const illusion = document!.querySelector('#illusion');
    if (illusion) {
      illusion.innerHTML = element.innerHTML;
    }
  }
}

function changeCategory(category: string): void {
    Object.assign(searchParams, {
      tags: category,
      page: 1,
      hitsPerPage: 20,
      query: ''
    })

  fetchPosts()
}

fetchPosts()

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      incrementPage();
    }
  }, {
    rootMargin: '200px',
  });

  if (scrollTrigger.value) {
    observer.observe(scrollTrigger.value);
  }
})

</script>

<style scoped>
.main {
  margin-left: 250px;
}
</style>