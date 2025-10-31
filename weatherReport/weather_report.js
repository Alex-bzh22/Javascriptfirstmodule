//var url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"

/*function showweatherDetails(event) {
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
*/
// exemple of lat and long -> 
//lat =33.44
//long =-94.04
 function showweatherDetails2(event) {
      event.preventDefault();
      const lat = document.getElementById('lat').value;
      const lon = document.getElementById('long').value;
      const apiKey = 'cb8404dcc4b18c8a4f3d55b26c2146ed'; // Remplacez 'YOUR_API_KEY' par votre clé API réelle
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      //const apiUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid=${apiKey}`;
      fetch(apiUrl)
        .then(response => response.json()) //format le retour en json
        .then(data => { //Accès aux données au format spécifié
          const weatherInfo2 = document.getElementById('weatherInfo2');
          weatherInfo2.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>
          `;
        })
}


 document.getElementById('weatherForm2').addEventListener('submit',showweatherDetails2);