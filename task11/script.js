
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    
    data.forEach(country => {
    
      let card = document.createElement('div');
      card.className = 'col-lg-4 col-sm-12';

      
      let cardContent = `
        <div class="card justify-content-center">
          <div class="card-header text-center badge bg-dark text-wrap">${country.name.common}</div>
          <div class="card-body justify-content-center">
           <img src="${country.flags.svg}" class="card-img-top" alt="Flag">
            <p class="card-text text-center  badge bg text-wrap text-center ">
              Region: ${country.region}<br>
              Latlng: ${country.latlng.join(', ')}<br>
              Country Codes: ${Object.keys(country.cca2).join(', ')}
            </p><br>
            <button type="button" class="btn btn-outline-dark justify-content-center  badge bg text-wrap"  onclick="getWeather('${country.name.common}')">Click for Weather</button>
           
           
          </div>
        </div>
      `;

  
      card.innerHTML = cardContent;

    
      document.getElementById('card-container').appendChild(card);
    });
  })
  .catch(error => console.log(error));


function getWeather(country) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=YOUR_API_KEY`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
    })
    .catch(error => console.log(error));
}
