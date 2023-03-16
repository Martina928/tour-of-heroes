import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/core/service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit{
  
  constructor(public msgService: MessageService) {}

  ngOnInit(): void {
  }

}
