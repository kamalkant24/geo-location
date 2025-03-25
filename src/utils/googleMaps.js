export const loadGoogleMapsAPI = () => {
    return new Promise((resolve, reject) => {
        if (window.google) {
            resolve(window.google);
            return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API}`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
            console.log("✅ Google Maps API Loaded Successfully!");
            resolve(window.google);
        };
        script.onerror = (error) => reject(error);

        document.head.appendChild(script);
    });
};
