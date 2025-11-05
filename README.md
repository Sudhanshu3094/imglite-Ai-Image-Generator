🖼️ Imglite – AI Image Generator (Client)

Imglite is a frontend-only React web app designed to generate AI images from text prompts.
This is the Client side of the project — the backend API for AI image generation is still under development.

🚧 Project Status

⚠️ Backend not yet ready.
Currently, the app UI and user interaction flow are functional, but actual image generation will be available once the backend (API) is connected.

🌟 Features

🧠 Text prompt input for generating AI images

🖼️ Display section for generated images (mock or future API integration)

🎨 Clean and modern interface built with React + Tailwind CSS

🔄 Loading animations for smooth UX

💾 Ready for future API integration (Node/Express or cloud-based AI service)

🛠️ Tech Stack

Frontend:

React.js

Tailwind CSS

Axios (for API requests – future use)

React Router DOM

📁 Folder Structure
Client/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ImageCard.jsx
│   │   └── Loader.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── CreatePost.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── README.md

⚙️ Installation & Setup

Clone the Repository

git clone https://github.com/Sudhanshu3094/imglite-Ai-Image-Generator.git
cd imglite-Ai-Image-Generator/Client


Install Dependencies

npm install


Run the App

npm run dev


View in Browser
Open: http://localhost:5173

🧩 API Integration (Coming Soon)

Once the backend is ready, you’ll be able to:

Send a text prompt to the API

Receive and display an AI-generated image

Save or share images

Example placeholder (future use):

const response = await axios.post(`${import.meta.env.VITE_API_URL}/generate`, { prompt });
setImage(response.data.photo);

🖥️ UI Preview (Optional)
Home Page	Generate Page
(Coming soon)	(Coming soon)
💡 Future Enhancements

✅ Connect backend for real image generation

✅ Add download/share options

🚀 Deploy to Vercel or Netlify

🖌️ Add dark/light theme

👨‍💻 Author

Sudhanshu Ranjan
Frontend Developer
