<script setup lang="ts">
import { RouterView } from "vue-router";

const hasTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0)

document.body.classList.add(hasTouch ? 'has-touch' : 'no-touch')
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
