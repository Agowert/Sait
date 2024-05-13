<script lang="ts" setup>

</script>



<template>
    <aside class="px-2 py-10  bg-sidebar h-full relative w-full ">
       <NuxtLink to="/"  class="mb-10 block   ">
        <NuxtImg  src="/Icon.png"  alt=""  widht="100px" class="mx-auto "/>
       </NuxtLink>

       <UiButton style="margin: 2px;" class=" px-2 py-2  relative w-full hover:text-primary"> Hi Users </UiButton>

       <button> <Icon name="i-line-md-log-out" size="30px" class="  absolute top-2  right-2 transition-colors hover:text-primary"    /> </button>

       <LayoutMenu></LayoutMenu>
      

    </aside>
</template>


