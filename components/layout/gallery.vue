
<script setup lang="ts"  >
import { GALLERY_DATA } from './gallery.data';

</script>


<template>

<NuxtLink class=" flex items-center py-1 px-3 rounded-lg w-full text-secondary-foreground shadow-sm  transition-colors hover:text-primary hover:shadow  hover:bg-secondary transition-all mb-2"  v-for='item in GALLERY_DATA'
            :key='item.name'
            :to='item.url'

            >

            <Icon :name="item.icon"  alt="radix-icons:dashboard" class="mr-3 " />
            <span>{{ item.name }}</span>

        </NuxtLink>
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Заголовок карточки</h5>
      <p class="card-text">Небольшой пример текста, который должен основываться на названии карточки и составлять основную часть содержимого карты.</p>
      <a href="#" class="btn btn-primary">Перейти куда-нибудь</a>
    </div>
  </div>
</template>

<style scoped>

</style>