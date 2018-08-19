import { Component, OnInit } from '@angular/core';
import { ChatmessageService } from '../chatmessage.service';
import { MessageModel } from '../models/message.model';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  constructor(private chatmessageService: ChatmessageService) { }

  ngOnInit() {
  }

  getMessages(){
    
  }
  sendMessage(msgElement) {
    let m = new MessageModel();
    m.dateCreate = new Date();
    m.Text = msgElement.value;
    this.chatmessageService.addMsg(m)                      
  }
}
