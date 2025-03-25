<template>
  <nav class="bg-gray-300 shadow-md dark:bg-gray-900 fixed top-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <img src="@/assets/ip-img.webp" alt="IP Lookup" class="w-6 h-6 mr-2" />
            IP Lookup
          </router-link>
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-6 items-center">
          <router-link to="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</router-link>
          <router-link to="/about" class="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</router-link>
        </div>
        <!-- Mobile Menu Button -->
        <div class="-mr-2 flex md:hidden">
          <button @click="isOpen = !isOpen" class="text-gray-700 dark:text-white hover:text-blue-500 focus:outline-none">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Menu Dropdown -->
    <div v-if="isOpen" class="md:hidden bg-white dark:bg-gray-900 border-t">
      <router-link to="/" class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Home</router-link>
      <router-link to="/about" class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">About</router-link>
    </div>
  </nav>
  <!-- Ensure content does not hide behind navbar -->
  <div class="pt-16"></div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>
