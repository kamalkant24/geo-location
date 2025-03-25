
<template>
    <div class="map-wrapper">
        <div class="map-card">
        <h3 class="text-xl font-semibold text-gray-800">Location on Map</h3>
        <p class="text-gray-600 text-sm">Precise location based on IP address</p>
        <div ref="mapRef" class="map"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  latitude: Number,
  longitude: Number,
});

const mapRef = ref(null);

onMounted(() => {
  if (props.latitude && props.longitude) {
    initMap();
  }
});

watch([() => props.latitude, () => props.longitude], () => {
  initMap();
});

const initMap = () => {
  if (!window.google || !props.latitude || !props.longitude) return;

  const lat = parseFloat(props.latitude);
  const lng = parseFloat(props.longitude);

  const map = new google.maps.Map(mapRef.value, {
    center: { lat, lng },
    zoom: 12,
    styles: [
      {
        featureType: "water",
        stylers: [{ color: "#46bcec" }, { visibility: "on" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#f0f0f0" }],
      },
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
    ],
  });

  new google.maps.Marker({
    position: { lat, lng },
    map,
    title: "User Location",
    icon: {
      url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
      scaledSize: new google.maps.Size(40, 40),
    },
  });
};
</script>


<style scoped>
.map-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.map-card {
  width: 90%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.map {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
