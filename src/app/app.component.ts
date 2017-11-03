import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  data: any = false;
  activeVideo: any = {
    video: false
  };

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get(`data.json`).subscribe( (response) => {
      this.data = JSON.parse(response['_body']);
      // add the additional property for the state of new profiles
      this.data.newProfiles.isOpen = true;
      this.activeVideo.video = this.data.videos[0];
    });
  }
}
