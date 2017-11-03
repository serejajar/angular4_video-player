import { Component, Input } from '@angular/core';

@Component({
  selector: 'new-profiles',
  templateUrl: `./new-profiles.component.html`,
  styleUrls: ['./new-profiles.component.css']
})
export class NewProfilesComponent {
  @Input('newProfiles') newProfiles: any;

  hide() {
    this.newProfiles.isOpen = false;
  }
}
