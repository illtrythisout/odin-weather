export { getLocation, currentLocation };

let currentLocation = {};

async function getLocation() {
  try {
    const position = await new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error('Geolocation not supported'));
      }
    });

    // If resolved, update currentLocation with the coordinates
    currentLocation.latitude = position.coords.latitude;
    currentLocation.longitude = position.coords.longitude;

    return currentLocation; // Return the populated location object
  } catch (error) {
    console.error('Error retrieving location:', error);
    throw error; // Re-throw error to handle it where getLocation() is called
  }
}
