import {  Component, OnInit, ViewChild } from '@angular/core';
import {MapGeocoder } from '@angular/google-maps'

@Component({
  selector: 'app-benz',
  templateUrl: './benz.component.html',
  styleUrls: ['./benz.component.scss'],
})
export class BenzComponent implements OnInit {
  constructor( public geoCoder:MapGeocoder ) {}

  public current_date = new Date();
  public imgUrl!: any;
  public latitude!: number;
  public longitude!: number;
  public deviceId!: string;

  public display: any;
  public center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  public address: string = '';
  public google: any;

  ngOnInit(): void {}
  public imgUpload(event: any): void {
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      this.imgUrl = reader.result;
    };
    this.latLng();
    this.deviceId = this.deviceId = window.navigator.userAgent;
  }

  public latLng(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log(this.latitude);
      console.log(this.longitude);
      this.center = { lat: this.latitude, lng: this.longitude }; // Set actual values for lat and lng
      console.log(this.center);
      this.getAddress()
    });
  }

 public getAddress():void{
  this.geoCoder.geocode({
    address:"Madhapur hyderabad "
  }).subscribe((result)=>{
    console.log(result);

  })
 }

}
