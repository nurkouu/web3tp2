import maplibregl from "maplibre-gl";

const carte = new maplibregl.Map({
  container: "carte",
  style: "https://tiles.openfreemap.org/styles/bright",
  center: [-73.8462195, 45.6125882], 
  zoom: 9 
});
