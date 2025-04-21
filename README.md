# 🔇 SilentEcho  
> *SilentEcho helps you find calm in the chaos.*

**SilentEcho** is a modern web app designed to help people discover quiet places in noisy cities — perfect for working, reading, meditating, or just taking a break. Whether you're looking for a calm café, a peaceful library, a tranquil park, or a cozy workspace, SilentEcho brings them to your fingertips with an intuitive map interface.

Built with a strong focus on user experience, responsive design, and clean UI, SilentEcho not only helps users find peaceful spots but also allows them to contribute new ones — creating a community-sourced map of serenity.

---

## 🚀 Live Demo  
[Visit SilentEcho](silent-echo.vercel.app)

---

## ✨ Features  

- 🌍 **Map interface with custom markers using Leaflet**  
  Visualize all quiet spots on a map with meaningful icons and interactions.

- 🔊 **Noise-level ratings** for each location (1 to 5)  
  Helps users gauge how peaceful a place really is.

- 🧘‍♀️ **Filter by type**: Cafes, Libraries, Parks, Workspaces, etc.  
  Narrow down results based on the kind of place you’re seeking.

- 🔍 **Search locations** by name or address  
  Quickly find specific locations using fuzzy search.

- 📍 **Auto-centers** on user's current location  
  Instantly see nearby quiet places without needing to manually search.

- ➕ **Add new quiet places** with full info  
  Contribute to the community by sharing your favorite peaceful spots.

- 💾 **Mock data** used for initial space listings  
  Ideal for testing and development before backend integration.

- 💽 **Persistent data** via localStorage  
  Keeps bookmarks and user-added data across sessions.

- ⚛️ **Built with React + Hooks + Context API**  
  Clean, modern frontend structure for easy maintainability and scalability.

- 🎨 **Smooth UI with animations** *(Framer Motion optional)*  
  Polished experience with soft transitions and interactive elements.

---

## 🛠 Tech Stack

- **React.js** (Functional Components + Hooks)  
- **Leaflet.js** for maps and location handling  
- **Tailwind CSS** for styling   
- **Vite** for fast development builds  

---

## 📦 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/your-username/silentecho.git
cd silentecho

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. Open your browser at
http://localhost:5173
```

> ⚠️ Requires Node.js and npm installed on your system.

---

## 📁 Folder Structure

```
SilentEcho/
├── dist/                          
│   ├── assets/                    
│   └── index.html                
│
├── src/                           
│   ├── components/                
│   │   ├── filters/              
│   │   │   └── FilterBar.jsx
│   │   ├── layout/         
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   ├── search/                
│   │   │   └── SearchBar.jsx
│   │   ├── spaces/                
│   │   │   └── SpaceCard.jsx
│   │   └── ui/                 
│   │       └── NoiseLevel.jsx
│
│   ├── context/                   
│   │   ├── LocationContext.jsx
│   │   ├── SpacesContext.jsx
│   │   └── ThemeContext.jsx
│
│   ├── data/                      
│   │   └── mockData.js
│
│   ├── pages/                   
│   │   ├── BookmarksPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── MapPage.jsx
│   │   └── SpaceDetails.jsx
│
│   ├── App.jsx                
│   └── index.css            
│
├── index.html                 
├── package-lock.json        
├── package.json          
├── postcss.config.js           
├── tailwind.config.js           
└── vite.config.js               
```
📸 Screenshots

_🏠 Homepage_
![🏠 Homepage](./dist/assets/Screenshot%202025-04-22%20012706.png)

_🗺️ Map Interface with Custom Markers_
![🗺️ Map Interface with Custom Markers](./dist/assets/Screenshot%202025-04-22%20013501.png)

_BookMark_
![BookMark](./dist/assets/Screenshot%202025-04-22%20013801.png)

---

## 🔮 Future Enhancements

- 🌐 Real-time noise data from external APIs  
- 🔐 User login, profile, and saved places dashboard  
- 💬 Community reviews, comments, and star ratings  
- 🗺️ Smarter suggestions using location and time of day  

---

## 👩‍💻 Author

**Anisha Singhal**  
