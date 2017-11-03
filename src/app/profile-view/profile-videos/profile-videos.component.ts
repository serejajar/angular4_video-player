import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-videos',
  templateUrl: `./profile-videos.component.html`,
  styleUrls: ['./profile-videos.component.css']
})
export class ProfileVideosComponent {
  @Input('videos') videos: any;
  @Input('activeVideo') activeVideo: any;

  changeVideo(video: any) {
    this.activeVideo.video = video;
  }
}
