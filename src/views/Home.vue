<template>
    <div>
      <!-- Hero Section -->
      <div
        class="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white"
        :class="{ 'min-h-screen': locationData, 'min-h-[50vh]': !locationData }"
      >
        <div class="flex flex-col items-center text-center px-4 py-10">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-xl">
            Track Any IP Address
          </h1>
          <p class="mt-2 text-base sm:text-lg md:text-xl text-white/90">
            Get accurate geolocation, ISP details, and more in real-time.
          </p>
  
          <!-- Input Field -->
          <div
            class="mt-6 flex flex-col sm:flex-row items-center gap-3 backdrop-blur-md bg-white/20 p-3 rounded-xl shadow-lg w-full sm:w-auto"
          >
            <input
              type="text"
              v-model="ipAddress"
              placeholder="Enter IP Address"
              class="px-5 py-3 w-full sm:w-72 md:w-96 text-gray-900 rounded-lg focus:outline-none bg-white/90 border-none"
            />
            <button
              @click="lookupIP"
              class="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg transition hover:bg-blue-600 w-full sm:w-auto"
            >
              <span v-if="!loading">Lookup</span>
              <span v-else class="loader"></span>
            </button>
          </div>
        </div>
  
        <!-- IP Details + Map Section -->
        <div v-if="locationData" class="flex flex-col items-center px-4 md:px-20 py-6">
          <div
            v-if="locationData.status === 'fail'"
            class="bg-red-500 text-white p-4 rounded-lg shadow-lg text-center w-full max-w-lg"
          >
            <p class="text-lg font-semibold">❌ IP Address Not Found</p>
            <p class="text-sm">Please check the IP address and try again.</p>
          </div>
  
          <!-- Show IP Details and Map if Data is Available -->
          <div
            v-else
            class="flex flex-wrap justify-center items-center gap-6 w-full"
          >
            <!-- IP Details -->
            <div class="ip-card">
              <h2 class="text-2xl font-extrabold">IP Address Details</h2>
              <div class="ip-info text-sm sm:text-base">
                <p><strong>Status:</strong> {{ locationData.status || "N/A" }}</p>
                <p><strong>IP:</strong> {{ locationData.query || "N/A" }}</p>
                <p><strong>Continent:</strong> {{ locationData.continent }} ({{ locationData.continentCode }})</p>
                <p><strong>Country:</strong> {{ locationData.country }} ({{ locationData.countryCode }})</p>
                <p><strong>Region:</strong> {{ locationData.regionName }} ({{ locationData.region }})</p>
                <p><strong>City:</strong> {{ locationData.city || "N/A" }}</p>
                <p><strong>ZIP Code:</strong> {{ locationData.zip || "N/A" }}</p>
                <p><strong>Latitude:</strong> {{ locationData.lat }}</p>
                <p><strong>Longitude:</strong> {{ locationData.lon }}</p>
                <p><strong>Timezone:</strong> {{ locationData.timezone }}</p>
                <p><strong>Currency:</strong> {{ locationData.currency }}</p>
                <p><strong>ISP:</strong> {{ locationData.isp }}</p>
                <p><strong>Mobile Connection:</strong> {{ locationData.mobile ? "Yes" : "No" }}</p>
              </div>
            </div>
  
            <!-- Google Map -->
            <div class="map-container">
              <GoogleMap
                v-if="locationData.lat && locationData.lon"
                :latitude="Number(locationData.lat)"
                :longitude="Number(locationData.lon)"
              />
            </div>
          </div>
        </div>
      </div>
  
      <!-- Features Section -->
      <div class="py-20 bg-white text-gray-900 text-center">
        <h2 class="text-3xl sm:text-4xl font-extrabold">Why Choose Us?</h2>
        <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-20">
          <div class="feature-card">
            <i class="fas fa-map-marker-alt text-4xl text-blue-600"></i>
            <h3 class="text-lg sm:text-xl font-semibold mt-3">Accurate Geolocation</h3>
            <p class="mt-2 text-gray-600 text-sm sm:text-base">Get precise details about any IP address.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-clock text-4xl text-purple-600"></i>
            <h3 class="text-lg sm:text-xl font-semibold mt-3">Instant Results</h3>
            <p class="mt-2 text-gray-600 text-sm sm:text-base">Real-time data with up-to-date insights.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-shield-alt text-4xl text-green-600"></i>
            <h3 class="text-lg sm:text-xl font-semibold mt-3">Secure & Private</h3>
            <p class="mt-2 text-gray-600 text-sm sm:text-base">Your searches are always protected.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import apiClient from "@/services";
  import GoogleMap from "@/components/GoogleMap.vue";
  
  const ipAddress = ref('');
  const loading = ref(false);
  const locationData = ref('');
  
  const lookupIP = async () => {
    loading.value = true;
    if (!ipAddress.value) {
      alert('Please enter an IP address');
      loading.value = false;
      return;
    }
    try {
      loading.value = true;
      const response = await apiClient.get(`ip-lookup/${ipAddress.value}`);
      locationData.value = response?.data;
    } catch (error) {
      console.error('Failed to fetch IP:', error);

    // Handle network errors
    if (!error.response) {
        errorMessage.value = "Network error: Please check your internet connection.";
    } 
    // Handle server errors (5xx)
    else if (error.response.status >= 500) {
        errorMessage.value = "Server error: Please try again later.";
    } 
    // Handle client errors (4xx)
    else if (error.response.status === 404) {
        errorMessage.value = "Invalid IP address. Please enter a valid one.";
    } 
    else {
        errorMessage.value = "An unexpected error occurred. Please try again.";
    }
    } finally {
      loading.value = false;
    }

  };
  </script>
  
  <style scoped>
  /* Loader Animation */
  .loader {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(0, 0, 0, 0.2);
    border-left-color: blue;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  /* Two-column layout */
  .ip-card {
  width: 100%;
  max-width: 380px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
}

/* Map size adjustment */
.map-container {
  width: 100%;
  max-width: 550px;
  height: 525px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Loader animation */
.loader {
  width: 18px;
  height: 18px;
  border: 3px solid rgba(0, 0, 0, 0.2);
  border-left-color: blue;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
  /* Features Section */
  .feature-card {
    @apply p-6 bg-gray-100 rounded-xl shadow-lg transition hover:shadow-2xl hover:-translate-y-1 duration-300;
  }
  
  /* Loader Animation */
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  