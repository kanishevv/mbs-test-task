<script setup lang="ts">
import { useAppStore } from './stores/app';

const store = useAppStore()
</script>

<template>
  <div class="app">
    <aside class="app__aside">
      <nav class="app__nav">
        <router-link class="app__nav-item" active-class="app__nav-item--active"
          exact-active-class="app__nav-item--exact-active" :to="`/${code}`" v-for="code in store.codes" :key="code">
          {{ code[0].toUpperCase() + code.slice(1) }}
        </router-link>
      </nav>
    </aside>
    <main class="app__main">
      <router-view />
    </main>
  </div>
</template>

<style scoped lang="scss">
.app {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.app__aside {
  width: 100%;
  flex-shrink: 0;
  padding: 1rem;

  @media (min-width: 768px) {
    width: 320px;
  }
}

.app__nav {
  display: flex;
  flex-direction: column;
}

.app__nav-item {
  display: flex;
  padding: .8rem;
  border-radius: 6px;
  background: #f4f4f4;
  margin-bottom: 10px;
  text-decoration: none;
  color: inherit;

  &--active {
    background: #ffe4f5;
  }
}

.app__main {
  width: 100%;
  padding: 1rem;
}
</style>
