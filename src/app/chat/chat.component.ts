import { Component, OnInit } from '@angular/core';
import { MessageModel } from '../models/message.model';
import { ChatmessageService } from '../chatmessage.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: MessageModel[];
  title: string = 'ברוכים הבאים'
  constructor(private chatmessageService: ChatmessageService) { 
  
    chatmessageService.allMessage().subscribe(value => {
      this.messages = value;
    });

  }

  ngOnInit() {
  }

}
