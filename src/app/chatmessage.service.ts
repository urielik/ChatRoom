import { Injectable } from '@angular/core';
import { MessageModel } from './models/message.model';
import { Observable, of } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatmessageService {
  private messages :MessageModel[];

  constructor() { 
    this.messages = [
      {
        Text: 'a',
        dateCreate: new Date(),
        idFrom: 1,
        idTo: 2
      },
      {
        Text: 'a',
        dateCreate: new Date(),
        idFrom: 1,
        idTo: 2
      },
      {
        Text: 'a',
        dateCreate: new Date(),
        idFrom: 1,
        idTo: 2
      }
    ]
  }

  allMessage(): Observable<MessageModel[]> {
    return of(this.messages);
  }
}
