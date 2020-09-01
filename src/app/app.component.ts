import { Component } from '@angular/core';
import { Poll, PollForm, PollVote } from './types'
import { PollService } from './poll.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  activePoll: Poll = null;
  polls;
  constructor(private ps: PollService) {
    this.polls = this.ps.getPolls();
  }
  setActivePoll(poll) {
    this.activePoll = null;
    setTimeout(() => { this.activePoll = poll }, 100)
  }
  handlePollCreate(poll: PollForm) {
    this.ps.createPoll(poll)
  }
  handlePollVote(pollvoted: PollVote) {
    this.ps.vote(pollvoted.id, pollvoted.vote)
  }
  ngOnInit() {
    this.ps.onEvent('PollCreated').subscribe(() => {
      this.polls = this.ps.getPolls();
    })
  }
}

