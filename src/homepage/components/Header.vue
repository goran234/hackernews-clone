<template>
  <div class="header">
    <div class="logo">
      <div>Search</div>
      <div>Hacker News</div>
    </div>
    <div>
      <input v-model="query" type="text" placeholder="Search stories by title url or author">
    </div>

  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from "vue";

const query = ref('');
const emits = defineEmits(['inputChange'])

const debouncedSearch = (query: string) => {
  emits('inputChange', query);
};

let timeout = 0;
watch(query, (newQuery) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => debouncedSearch(newQuery), 500);
});
</script>

<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff6600;
  color: white;
  padding: 10px 20px;
  font-family: Arial, sans-serif;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.header .logo {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
}

.header .logo div:first-child {
  font-size: 14px;
  color: #fff;
}

.header .logo div:last-child {
  font-size: 24px;
  color: white;
}

.header input {
  padding: 8px 12px;
  font-size: 16px;
  width: 300px;
  border-radius: 4px;
  border: none;
  outline: none;
  transition: all 0.3s ease;
}

.header input:focus {
  border: 2px solid #ff6600;
  box-shadow: 0 0 5px rgba(255, 102, 0, 0.5);
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .header .logo {
    margin-bottom: 10px;
  }

  .header input {
    width: 100%;
  }
}
</style>