
<script lang="ts" setup>
//console.log("Load");
</script>



<template>
  <section class="grid" style="min-height: 100vh;">
    <LayoutSidebar></LayoutSidebar>
    <div>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.grid{
    display: grid;
    grid-template-columns:1fr 6fr  ;
}
</style>