import maplibregl from "maplibre-gl";

const destinations = [
  [-73.7562194, 45.4577989], // Airport Montreal
  [-79.6319868, 43.6821737], // Airport Toronto
  [-61.1621873, 13.2630842] // St-vincent Airport
];
let destinationIndex = 0;

const carte = new maplibregl.Map({
  container: "carte",
  style: "https://api.maptiler.com/maps/satellite/style.json?key=WJ8oUVj7jA3CUcp0bLPr",
  center: destinations[destinationIndex],
  zoom: 15,
    attributionControl: false,
});

document.body.addEventListener("click", () => {
  destinationIndex = (destinationIndex + 1) % destinations.length;
  carte.flyTo({
    center: destinations[destinationIndex],
    zoom: 15,
    duration: 3000
  });
});
