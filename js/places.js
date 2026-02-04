// Weather and time functionality for places page
document.addEventListener('DOMContentLoaded', function() {
  const places = document.querySelectorAll('.place-card');

  // Mock weather data (since we don't have an API key)
  // In production, you would use: https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric
  const mockWeatherData = {
    'Zurich': { temp: 15, desc: 'partly cloudy' },
    'Chicago': { temp: 22, desc: 'sunny' },
    'Munich': { temp: 18, desc: 'light rain' },
    'Vienna': { temp: 20, desc: 'clear sky' },
    'Paris': { temp: 17, desc: 'overcast' },
    'Heidelberg': { temp: 19, desc: 'partly cloudy' },
    'London': { temp: 14, desc: 'drizzle' },
    'Tokyo': { temp: 26, desc: 'humid and warm' },
    'Vancouver': { temp: 21, desc: 'mild and breezy' }
  };

  // Update local times for all places
  function updateTimes() {
    places.forEach(place => {
      const timezone = place.dataset.timezone;
      const timeElement = place.querySelector('.local-time');
      
      if (!timeElement) return;

      try {
        const now = new Date();
        const localTime = now.toLocaleTimeString('en-US', {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
        
        timeElement.textContent = localTime;
        timeElement.classList.remove('loading');
      } catch (error) {
        timeElement.textContent = 'Unavailable';
        timeElement.classList.remove('loading');
        timeElement.classList.add('error');
      }
    });
  }

  // Update weather data for all places
  function updateWeather() {
    places.forEach(place => {
      const city = place.dataset.city;
      const tempElement = place.querySelector('.weather-temp');
      const descElement = place.querySelector('.weather-desc');
      
      if (!tempElement || !descElement) return;

      try {
        const weather = mockWeatherData[city];
        
        if (weather) {
          tempElement.textContent = `${weather.temp}°C`;
          descElement.textContent = weather.desc;
          tempElement.classList.remove('loading');
        } else {
          tempElement.textContent = 'N/A';
          descElement.textContent = 'Unavailable';
          tempElement.classList.remove('loading');
          tempElement.classList.add('error');
        }
      } catch (error) {
        tempElement.textContent = 'N/A';
        descElement.textContent = 'Unavailable';
        tempElement.classList.remove('loading');
        tempElement.classList.add('error');
      }
    });
  }

  // Initial load
  updateTimes();
  updateWeather();

  // Update times every minute
  setInterval(updateTimes, 60000);

  // Update weather every 10 minutes
  setInterval(updateWeather, 600000);
});

// Optional: Add animation when places come into view
document.addEventListener('DOMContentLoaded', function() {
  const placeCards = document.querySelectorAll('.place-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  placeCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
});
