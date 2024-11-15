<template>
  <div class="sidebar">
    <ul>
      <li v-for="item in items" :key="item.value">
        <button @click="emits('changeCategory', item.value)">{{ item.label }}</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

  const items = [
    {label: 'Stories', value: 'story'},
    {label: 'Ask HN', value: 'ask_hn'},
    {label: 'Front page', value: 'front_page'},
  ]

  const emits = defineEmits(['changeCategory'])
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #212121;
  color: white;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 16px;
}

.sidebar button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  text-align: left;
  background-color: #212121;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  outline: none;
}

.sidebar button:hover {
  background-color: #333333;
}

.sidebar-footer a {
  color: #bbb;
  font-size: 14px;
  text-decoration: none;
  margin: 0 8px;
}

.sidebar-footer a:hover {
  color: #fff;
}
</style>