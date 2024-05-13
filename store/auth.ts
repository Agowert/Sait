import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null);

  const setToken = (newToken: string) => {
    token.value = newToken;
    localStorage.setItem('token', newToken);
  };

  const removeToken = () => {
    token.value = null;
    localStorage.removeItem('token');
  };

  const isAuthenticated = computed(() => !!token.value);

  const login = async (email: string, password: string) => {
    const response = await axios.post('/api/login', { email, password });
    setToken(response.data.token);
  };

  const register = async (name: string, email: string, password: string) => {
    await axios.post('/api/register', { name, email, password });
  };

  const logout = () => {
    removeToken();
  };

  return {
    token,
    isAuthenticated,
    login,
    register,
    logout
  };
});
