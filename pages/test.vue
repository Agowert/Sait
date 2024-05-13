<script lang="ts">
</script>

<template>
    <LayoutGallery></LayoutGallery>
  <div class="bg-gradient-to-tr fromGra toGra  w-full h-full"></div>
  
</template>

<style scoped>
.bg-gradient-to-tr {
    background-image: linear-gradient(to top right, var(--from-color), var(--to-color));
}

.fromGra {
    --from-color: rgb(12, 12, 19);
}

.toGra {
    --to-color: rgba(50, 49, 107, 0.815);
}

</style>