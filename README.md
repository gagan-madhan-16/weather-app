# Weather App
Weather App in mern stack using openweathermap

## Getting Started 🚀

1. **Prerequisites**
   - Node.js
   - npm
   - A valid API key from [OpenWeatherMap](https://openweathermap.org/).

2. **Installation Steps**
   - Clone the repository
     ```bash
     git clone [your-repository-url]
     cd [project-directory]
     ```
   - Install dependencies
     ```bash
     npm install
     ```
   - Add API key in `src/config.js`:
     ```javascript
     export const API_KEY = "YOUR_API_KEY";;
     ```
   - Start the development server
     ```bash
     npm run dev
     ```
   - Visit `http://localhost:3000` in your browser

3. **Troubleshooting**
- Port 3000 in use? Run:
  ```bash
  npm run dev -- --port 3001
  ```
- API Key issues? Check configuration in `src/config.js`
