<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-700 px-6 text-center">
      <!-- Illustration -->
      <div class="w-80 md:w-96 mb-6">
        <img src="@/assets/not-f.png" alt="404 Not Found" class="w-full">
      </div>

      <!-- Text Content -->
      <h1 class="text-6xl font-bold text-white">404</h1>
      <p class="text-lg text-gray-200 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>

      <!-- Home Button -->
      <router-link to="/" 
        class="mt-6 px-6 py-3 text-lg font-semibold bg-white text-blue-600 
               rounded-lg shadow-lg hover:scale-105 transition-all">
        Go Home
      </router-link>
    </div>
</template>
