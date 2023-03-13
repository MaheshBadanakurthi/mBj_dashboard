import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-bugatti',
  templateUrl: './bugatti.component.html',
  styleUrls: ['./bugatti.component.scss'],
})
export class BugattiComponent implements OnInit {
  @ViewChild('videoElm', { static: true })
  videoElm!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElm', { static: true })
  canvasElm!: ElementRef<HTMLCanvasElement>;
 public watermarkText:string="SEBI";
 public isClicked = false;

  constructor() {}

  ngOnInit(): void {
    this.waterMark();
  }



  public waterMark() {
    const video = this.videoElm.nativeElement;
    const canvas = this.canvasElm.nativeElement;
    const ctx = canvas.getContext('2d');

    video.addEventListener('play', () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      if (ctx) {
        const drawFrame = () => {
          if (!video.paused && !video.ended) {
            // draw the original video frame
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            // draw the watermark text on top of the original video frame
            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = 'red';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            ctx.fillText('Watermark Text', 50, 50);
            // render the frame to the canvas
            requestAnimationFrame(drawFrame);
          }
        };
        drawFrame();

        // add click event listener to video element
        video.addEventListener('click', () => {
          // remove the event listener to prevent creating a new video element
          video.removeEventListener('click', () => {});
          // start playing the video
          video.play();
        });
      }
    });
  }


}
