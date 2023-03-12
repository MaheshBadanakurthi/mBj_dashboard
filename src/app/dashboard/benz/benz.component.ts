import { Component, OnInit } from '@angular/core';
import * as exif from 'exif-js';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-benz',
  templateUrl: './benz.component.html',
  styleUrls: ['./benz.component.scss'],
})
export class BenzComponent implements OnInit {
  constructor() {

  }
  current_date = new Date();
  imgUrl!: any ;
  latitude!: number;
  longitude!: number;
  deviceId!: string;

  ngOnInit(): void {

  }

  public imgUpload(event: any): void {
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      this.imgUrl = reader.result;
      // console.log(this.imgUrl);

    };
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log(this.latitude);
      console.log(this.longitude);
    });
    this.deviceId =  this.deviceId = window.navigator.userAgent;

  }









}
