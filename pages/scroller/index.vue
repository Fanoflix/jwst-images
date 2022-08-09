<template>
  <section>
    <h1>Scroller</h1>

    <p>{{ data }}</p>
  </section>
</template>

<script setup lang="ts">
const data = ref(
  await $fetch("/api/images", {
    method: "post",
    body: {
      mockdata: "testing post",
    },
  })
);

// console.log(await data.value);
</script>
