// fetch author
fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`; // Set background image
    document.getElementById("author").textContent = `By: ${data.user.name}`; // Set author name
  })
  .catch((err) => {
    // Use a default background image/author
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1591205024850-d3420e30469e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcGUlMjB0b3dufGVufDB8fDB8fHww)`;
    document.getElementById("author").textContent = `By: Thomas Bennie`;
  });

const fetchCoinData = async () => {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin");
    if (!res.ok) {
      throw Error("Something went wrong fetching Dogecoin data");
    }
    const data = await res.json();
    // Update DOM with cryptocurrency data
    document.getElementById("crypto-top").innerHTML = `
      <img src=${data.image.small} />
      <span>${data.name}</span>
    `;
    document.getElementById("crypto").innerHTML += `
      <p>🎯: $${data.market_data.current_price.usd}</p>
      <p>👆: $${data.market_data.high_24h.usd}</p>
      <p>👇: $${data.market_data.low_24h.usd}</p>
    `;
  } catch (err) {
    console.error(err);
  }
};

function getCurrentTime() {
  const date = new Date();
  document.getElementById("time").textContent = date.toLocaleTimeString(
    "en-us",
    { timeStyle: "short" }
  );
}

setInterval(getCurrentTime, 1000);

// Weather, get user's weather details and geolocation
navigator.geolocation.getCurrentPosition(async (position) => {
  try {
    const res = await fetch(
      `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
    );
    if (!res.ok) {
      throw Error("Weather data not available");
    }
    const data = await res.json();
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    // Update DOM with weather data
    document.getElementById("weather").innerHTML = `
      <img src=${iconUrl} />
      <p class="weather-temp">${Math.round(data.main.temp)}º</p>
      <p class="weather-city">${data.name}</p>
    `;
  } catch (err) {
    console.error(err);
  }
});

// Call the function to fetch coin data
fetchCoinData();
