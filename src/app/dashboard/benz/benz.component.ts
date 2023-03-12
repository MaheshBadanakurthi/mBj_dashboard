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
    this.deviceId =  this.deviceId = window.navigator.userAgent;

  }
  current_date = new Date();
  imgUrl!: any ;
  latitude!: number;
  longitude!: number;
  deviceId!: string;

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log(this.latitude);
      console.log(this.longitude);
    });
  }

  public imgUpload(event: any): void {
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      this.imgUrl = reader.result;
      console.log(this.imgUrl);

    };
  }


  // getDeviceId(): string {
  //   const userAgent = navigator.userAgent;
  //   const match = userAgent.match(/(Android|iPhone|iPod|iPad|Windows Phone|Tablet|Mobile|Silk|Kindle|PlayBook|BB10|Opera Mini|IEMobile)/);
  //   if (match && match[0]) {
  //     return match[0];
  //   } else {
  //     return 'unknown';
  //   }
  // }






}
