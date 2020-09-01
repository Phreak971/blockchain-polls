import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { PollComponent } from './poll/poll.component';
import { VotePollComponent } from './vote-poll/vote-poll.component';
import {PollService} from './poll.service'
@NgModule({
  declarations: [
    AppComponent,
    CreatePollComponent,
    PollComponent,
    VotePollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
