import { Component, Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toDate'})
export class ToDatePipe implements PipeTransform {
  transform(value: number): string {
    let number = Math.round(value);
    let rest = number % 60;
    let minutes = (number - rest) / 60;
    let seconds = rest > 9 ? rest.toString() : `0${rest}`;
    return `${minutes}:${seconds}`;
  }
}

@Component({
  selector: 'v-player',
  templateUrl: `./v-player.component.html`,
  styleUrls: ['./v-player.component.css']
})
export class VPlayerComponent {
  @Input('activeVideo') activeVideo: any;
  isPlayed: boolean = true;
  isLoaded: boolean = false;
  isSoundOff: boolean = false;
  isDownloadLinksOpen: boolean = false;

  enableControls(videoElem: any) {
    this.isLoaded = true;

    if (videoElem.currentTime === videoElem.duration) {
      this.isPlayed = !this.isPlayed;
    }
  }

  play(elem: any) {
    if (this.isPlayed) {
      elem.pause();
    } else {
      elem.play();
    }
    this.isPlayed = !this.isPlayed;
  }

  changeCurrTime(videoElem: any, value: string) {
    videoElem.currentTime = value;
  }
}
