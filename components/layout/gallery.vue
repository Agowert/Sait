<script setup lang="ts">

import { GALLERY_DATA } from "./gallery.data";

// Реактивное свойство для фильтра
const filterText = ref('');

// Вычисляемое свойство для фильтрованных данных
const filteredGalleryData = computed(() =>
  GALLERY_DATA.filter(item =>
    item.name.toLowerCase().includes(filterText.value.toLowerCase()) ||
    item.text.toLowerCase().includes(filterText.value.toLowerCase())
  )
);
</script>
 



<template>
    <div class="gallery-container">
      <input style="color: #666;"
        type="text"
        v-model="filterText"
        placeholder="Фильтр"
        class="filter-input"
      />
    </div>
    <div class="gallery-container">
      <!-- Элемент ввода для фильтра -->
    
      <!-- Галерея -->
      <div
        class="gallery-item"
        v-for="item in filteredGalleryData"
        :key="item.name"
        :to="item.url"
      >
        <div class="gallery-image-wrapper">
          <img :src="item.icon" class="gallery-image" alt="Icon" />
        </div>
        <div class="gallery-content">
          <h5 class="gallery-title">{{ item.name }}</h5>
          <p class="gallery-text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </template>
  


<style scoped>

.filter-input {

justify-content: center;
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #1a1a1a;
  border-radius: 4px;
}
.gallery-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 20px;
}

.gallery-item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 18rem;
}

.gallery-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.gallery-image-wrapper {
  border-bottom: 4px solid #e2e8f0;
  overflow: hidden;
}

.gallery-image {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.3s;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.gallery-content {
  padding: 16px;
}

.gallery-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 8px;
}

.gallery-text {
  font-size: 1rem;
  color: #4a5568;
}
</style>
