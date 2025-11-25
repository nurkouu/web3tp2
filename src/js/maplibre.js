import maplibregl from "maplibre-gl";

const carte = new maplibregl.Map({
  container: "carte", // id du div
  style: "https://tiles.openfreemap.org/styles/bright",
  center: [-73.8462195, 45.6125882], // Laval
  zoom: 9 // Plus c'est bas, plus c'est haut
});
