<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '/Node/Sait/store/auth';

const authStore = useAuthStore();

const name = ref('');
const email = ref('');
const password = ref('');
const error = ref('');

const router = useRouter();

const register = async () => {
  try {
    await authStore.register(name.value, email.value, password.value);
    router.push('/login');
  } catch (err) {
    error.value = 'Registration failed';
  }

};

</script>

<template>
    <div style="padding: 20px;">
    <div class="register-container" >
      <h1>Register</h1>
      <form @submit.prevent="register" class="register-form">
        <div class="form-group">
          <input type="text"  v-model="name" required class="form-input" placeholder="Name" />
        </div>
        <div class="form-group">
          <input type="email" v-model="email" required class="form-input" placeholder="Email" />
        </div>
        <div class="form-group">
          <input type="password" v-model="password" required class="form-input" placeholder="Password" />
        </div>
        <button type="submit" class="btn-register">Register</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
</div>
  </template>
  
  <style scoped>
    .form-input {
       color: #666;
    }
  .register-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
    background-color: #f5f5f5;
  }
  
  h1 {
    text-align: center;
  }
  
  .register-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-input {
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;
  }
  
  .form-input:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .btn-register {
    padding: 12px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-register:hover {
    background-color: #0056b3;
  }
  
  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 10px;
  }
  </style>