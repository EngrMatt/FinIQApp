<template>
  <div>Loading...</div>
</template>

<script setup>
import { onMounted } from 'vue';

// By using onMounted, we ensure that the redirect happens on the client-side
// after the initial page has loaded. This allows the PWA manifest and
// service worker to be registered correctly.
onMounted(() => {
  useRouter().push('/dashboard');
});
</script>