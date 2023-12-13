async function getWeather() {
    const cityInput = document.getElementById("cityInput").value;
    const apiKey = "cabc38a026855638942bbfd4fed53406"; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (response.ok) {
        const weatherInfo = `Current Temperature: ${data.main.temp}°C, Condition: ${data.weather[0].description}`;
        document.getElementById("weatherInfo").innerText = weatherInfo;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      document.getElementById(
        "weatherInfo"
      ).innerText = `Error: ${error.message}`;
    }
  }
  