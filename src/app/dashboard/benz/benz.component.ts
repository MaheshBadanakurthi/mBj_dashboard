import { Component, OnInit, ViewChild } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-benz',
  templateUrl: './benz.component.html',
  styleUrls: ['./benz.component.scss'],
})
export class BenzComponent implements OnInit {
  constructor(public geoCoder: MapGeocoder) {}

  public current_date = new Date();
  public imgUrl!: any;
  public latitude!: number;
  public longitude!: number;
  public deviceId!: string;

  public display: any;
  public center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  public address: string = '';
  public google: any;
  public show: boolean = false;

  ngOnInit(): void {}

  public imgUpload(event: any): void {
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      this.imgUrl = reader.result;
      this.show = true;
    };
    this.latLng();
    this.deviceId = this.deviceId = window.navigator.userAgent;
  }

  public latLng(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      this.center = { lat: this.latitude, lng: this.longitude };
    });
  }

  public imgForLoc: any;
  public latt!: number;
  public longit!: number;
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';

  public imageUploaded(event: any): void {
    const imgFile = event.target.files[0];
    console.log(imgFile);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imgFile);
    fileReader.onload = () => {
      this.imgForLoc = fileReader.result;
    };

    mapboxgl as typeof mapboxgl;
    this.map = new mapboxgl.Map({
      accessToken:'pk.eyJ1IjoiZHBpZXRyb2NhcmxvIiwiYSI6ImNram9tOGFuMTBvb3oyeXFsdW5uYmJjNGQifQ._zE6Mub0-Vpl7ggMj8xSUQ',
       container:'map',
       style: this.style,
      zoom: 16,
    })
    this.map.addControl(new mapboxgl.NavigationControl());
    new MapboxGeocoder({
      accessToken:mapboxgl.accessToken,
      mapboxgl:mapboxgl
    })
    navigator.geolocation.getCurrentPosition((data) => {
      this.latt = data.coords.latitude;
      this.longit = data.coords.longitude;
      new mapboxgl.Marker().setLngLat([this.longitude, this.latitude]).addTo(this.map)
    });
  }
}
