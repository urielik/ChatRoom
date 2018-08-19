import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { ChatComponent } from './chat/chat.component';
import { SendComponent } from './send/send.component';
import {ChatmessageService} from './chatmessage.service'

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';


export const firebaseConfig = {
  apiKey: "AIzaSyBerJ6R-_VeNiTvtC_t-feYXiY4MTzgx_g",
  authDomain: "chat-room-814e0.firebaseapp.com",
  databaseURL: "https://chat-room-814e0.firebaseio.com",
  projectId: "chat-room-814e0",
  storageBucket: "chat-room-814e0.appspot.com",
  messagingSenderId: "1000052297546"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ChatComponent,
    SendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
    
  ],
  providers: [ChatmessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
