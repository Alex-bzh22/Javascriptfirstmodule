//var url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"

function showweatherDetails(event) {
      event.preventDefault();
      const city = document.getElementById('city').value;
      const apiKey = 'cb8404dcc4b18c8a4f3d55b26c2146ed'; // Remplacez 'YOUR_API_KEY' par votre clé API réelle
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      fetch(apiUrl)
        .then(response => response.json()) //format le retour en json
        .then(data => { //Accès aux données au format spécifié
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
}
 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );