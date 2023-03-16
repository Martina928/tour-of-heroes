import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  msgLog = [
    'this is msg',
    'this is msg',
    'this is msg',
    'this is msg',
    'this is msg', 
  ];

  onClearClick() {
    this.msgLog = [];
  }

}
