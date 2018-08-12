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
    AppRoutingModule
  ],
  providers: [ChatmessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
