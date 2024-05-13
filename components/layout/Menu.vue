<script setup lang="ts">
import { MENU_DATA } from './menu.data';
</script>

<template>
    <div>
        <NuxtLink class=" flex items-center py-1 px-3 rounded-lg w-full text-secondary-foreground shadow-sm  transition-colors hover:text-primary hover:shadow  hover:bg-secondary transition-all mb-2"  v-for='item in MENU_DATA'
            :key='item.name'
            :to='item.url'

            >

            <Icon :name="item.icon"  alt="radix-icons:dashboard" class="mr-3 " />
            <span>{{ item.name }}</span>

        </NuxtLink>
    </div>
</template>