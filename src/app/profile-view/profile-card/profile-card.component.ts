import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-card',
  templateUrl: `./profile-card.component.html`,
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  @Input('modelInfo') modelInfo: any;
}
