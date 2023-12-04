<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { QCard } from '@/components/QCard'

const store = useAppStore()
</script>

<template>
    <q-card v-bind="item" v-for="item in store.drinks" :key="item.id" />
</template>