import { Injectable } from '@angular/core';
import { MessageModel } from './models/message.model';
import { Observable, of } from '../../node_modules/rxjs';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ChatmessageService {
  private messages : MessageModel[];
  msgRef;

  // constructor() { 
  //   this.messages = [
  //     {
  //       Text: 'a',
  //       dateCreate: new Date(),
  //       idFrom: 1,
  //       idTo: 2
  //     },
  //     {
  //       Text: 'a',
  //       dateCreate: new Date(),
  //       idFrom: 1,
  //       idTo: 2
  //     },
  //     {
  //       Text: 'a',
  //       dateCreate: new Date(),
  //       idFrom: 1,
  //       idTo: 2
  //     }
  //   ]
  // }

  constructor(public db: AngularFireDatabase) {
    this.msgRef = db.list('items');
  }

  allMessage(): Observable<MessageModel[]> {
    return this.msgRef.valueChanges();
  }

  addMsg(m: MessageModel) {
    alert(m.Text);
    this.msgRef.push({ content: m });
  }
}
