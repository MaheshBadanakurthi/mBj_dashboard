import { Component } from '@angular/core';
import * as exif from 'exif-js';

@Component({
  selector: 'app-benz',
  templateUrl: './benz.component.html',
  styleUrls: ['./benz.component.scss']
})
export class BenzComponent {


  imageGps(event:any){
    const imageFile = (event.target as HTMLInputElement).files?.[0];
    console.log(imageFile);

    if (imageFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const exifData = exif.readFromBinaryFile(event.target?.result as ArrayBuffer);
        console.log(exifData);
        console.log(event.target?.result);


        const gpsLatitude = exifData?.GPSLatitude;
        const gpsLongitude = exifData?.GPSLongitude;
        console.log(`GPS latitude: ${gpsLatitude}, GPS longitude: ${gpsLongitude}`);
        // Use the GPS latitude and longitude values to display the location on a map or perform other operations.
      };
      reader.readAsArrayBuffer(imageFile);
    }
  }




}
