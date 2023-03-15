import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'

@Component({
  selector: 'app-bugatti',
  templateUrl: './bugatti.component.html',
  styleUrls: ['./bugatti.component.scss'],
})
export class BugattiComponent implements OnInit {

  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';

  public lat!:number
  public lng!:number
  constructor() {}

  ngOnInit(): void {
    mapboxgl as typeof mapboxgl;
    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiZHBpZXRyb2NhcmxvIiwiYSI6ImNram9tOGFuMTBvb3oyeXFsdW5uYmJjNGQifQ._zE6Mub0-Vpl7ggMj8xSUQ',
      container: 'map',
      style: this.style,
      zoom: 16,
      // center: [this.lng, this.lat],
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
      // Add geocoder control
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  });

  // Get current location
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
   this.map.setCenter([longitude, latitude]);
   console.log({ latitude, longitude });
   const marker = new mapboxgl.Marker()
   .setLngLat([longitude, latitude])
   .addTo(this.map);
  });
  }


}
