<template>
    <form @submit.prevent="register">
      <input type="text" v-model="name" placeholder="Name" required>
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Register</button>
    </form>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  
  const register = () => {
    // Логика для регистрации пользователя
  }
  </script>
  