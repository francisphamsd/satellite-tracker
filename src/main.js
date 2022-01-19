// GET MAP
mapboxgl.accessToken =
  "pk.eyJ1IjoiZnBoYW1zZCIsImEiOiJja3lheXR5ZXcwNDRpMzFwaTV2a3ZvMDgzIn0.TCS6y3GFriHSO10wQpzO6Q";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [0, 0], // starting position [lng, lat]
  zoom: 1, // starting zoom
});

// GET DATA
const lon = document.getElementById("lon");
const lat = document.getElementById("lat");
const vel = document.getElementById("vel");
const alt = document.getElementById("alt");
const iss_url = "https://api.wheretheiss.at/v1/satellites/25544";

map.on("load", async () => {
  // Add an image to use as a custom marker
  map.loadImage("../assets/iss.png", async (error, image) => {
    const geojson = await getLocation();

    if (error) throw error;
    map.addImage("custom-marker", image);
    // Add a GeoJSON source with 2 points
    map.addSource("points", {
      type: "geojson",
      data: geojson,
    });

    // Add a symbol layer
    map.addLayer({
      id: "points",
      type: "symbol",
      source: "points",
      layout: {
        "icon-image": "custom-marker",
        // get the title name from the source's "title" property
        // "text-field": ["get", "title"],
        // "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        // "text-offset": [0, 1.25],
        // "text-anchor": "top",
      },
    });

    // Get iss location every 1 second
    const updateSource = setInterval(async () => {
      const geojson = await getLocation(updateSource);
      map.getSource("points").setData(geojson);
    }, 1000);

    async function getLocation(updateSource) {
      // Make a GET request to the API and return the location of the ISS.
      try {
        const response = await fetch(iss_url, { method: "GET" });
        const { latitude, longitude, velocity, altitude } =
          await response.json();
        // Fly the map to the location.
        map.flyTo({
          center: [longitude, latitude],
          speed: 0.1,
        });

        // Display data on DOM element
        lon.textContent = longitude.toFixed(2);
        lat.textContent = latitude.toFixed(2);
        vel.textContent = (velocity * 0.6213712).toFixed(2);
        alt.textContent = (altitude * 0.6213712).toFixed(2);

        // Return the location of the ISS as GeoJSON.
        return {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                // coordinates: [longitude, latitude],
                coordinates: [longitude, latitude],
              },
            },
          ],
        };
      } catch (err) {
        // If the updateSource interval is defined, clear the interval to stop updating the source.
        if (updateSource) clearInterval(updateSource);
        throw new Error(err);
      }
    }
  });
});
