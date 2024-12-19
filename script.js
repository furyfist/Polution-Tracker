// Defining the global variables
const cityInput = document.getElementById('Text-button');
const searchButton = document.getElementById('Search-button');
const locationButton = document.getElementById('location-button');
const apiDisplay = document.querySelector('#aqi-display span'); // not in my html file
const pollutantBreakdown = document.querySelectorAll('#pollutant-breakdown span');
const healthAdvice = document.getElementById('health-advice');

async function fetchAQIData (){
    const city = cityInput.Value.trim();
    if(!city){
        alert('Please enter a city');
        return;
    }
}

const apiKey = "https://api.waqi.info/feed/here/?token=7dedb92756ab0f102ac2cce399e3aa69712fec3f";
const apiUrl = '0';

try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if(data.list) {
        
    }

}


