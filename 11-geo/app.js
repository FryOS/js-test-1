function getUserCoordinates() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          error => {
            reject(error);
          }
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  }
  
  // Пример использования
  getUserCoordinates()
    .then(coordinates => {
      console.log('Latitude:', coordinates.latitude);
      console.log('Longitude:', coordinates.longitude);
    })
    .catch(error => {
      console.log('Error:', error.message);
    });