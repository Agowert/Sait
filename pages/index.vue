<script lang="ts">


export default {
  setup() {
    // Список цветов для изменения
    const colors = ['#00008B', '#000080' , '#000000', '#2F4F4F'];
    
    // Индекс текущего цвета
    let currentIndex = 0;
    
    // Ссылка на текущий цвет
    const bgColor = ref(colors[currentIndex]);
    
    // Функция для изменения цвета
    const changeColor = () => {
      currentIndex = (currentIndex + 1) % colors.length;
      bgColor.value = colors[currentIndex];
    };
    
    // Вызываем функцию changeColor каждые 5 секунд
    setInterval(changeColor, 5000);
    
    return {
      bgColor
    };
  }
};
</script>

<template>
    <div class="flex items-center justify-center h-screen">
      <div class="p-10 rounded-lg shadow-lg" :style="{ backgroundColor: bgColor }">
        <h1 class="text-3xl font-bold text-center text-gray-400 mb-4">Добро пожаловать</h1>
        <p class="text-lg text-center text-gray-500">Тестовый сайт</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Добавим немного стилей для окна приветствия */
  .bg-white {
    max-width: 500px; /* Ширина блока */
  }
  
  .shadow-lg {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* Добавим тень */
  }
  </style>
  