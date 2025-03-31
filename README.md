GeoLocation Project
📝 Introduction
This project provides a GeoLocation service that retrieves location details based on the user's IP address. It displays the IP address-related data and location on a Google Map on the frontend. Users can input an address, submit it, and see the corresponding geographical data displayed on a map.

Features:
Users input an address in the input field.

After clicking the Submit button, the system fetches the corresponding IP address data.

Location data (longitude, latitude) and other address-related details are displayed on the Google Map.

The backend is built with Laravel to handle the logic and IP address lookups, while the frontend is built with Vue.js to provide a smooth user experience.


🌟 Features
Client-Side Features:
User Input Field:

The user can input an address in the provided field and click Submit.

IP Address Data Retrieval:

The system fetches data associated with the user's IP address and displays it.

Google Map Display:

After retrieving the location data, the location is displayed on a Google Map based on the provided IP address or address.


⚙️ Installation
📥 Prerequisites:


Vue.js (for frontend)

Node.js & NPM (for Vue.js)

💻 Installation & Setup:

Clone the Frontend Repository:
bash
Copy
# Clone the frontend repository
git clone https://github.com/your-username/geo-location-frontend.git

# Navigate to the project directory
cd geo-location-frontend

Install Frontend Dependencies:
bash
Copy
# Install frontend dependencies using npm
npm install

Start the Frontend Development Server:
bash
Copy
# Run the frontend development server
npm run dev
The frontend will now be running on http://localhost:8080.

📊 Usage
Open the Frontend on http://localhost:8080.

Enter an address into the input field and click Submit.

The IP address-related data and location (latitude/longitude) will be displayed on a Google Map.

📌 Technologies Used
Frontend: Vue.js

Backend: Laravel

Google Maps API: For displaying location on the map

