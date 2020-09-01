import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import ApexCharts from 'apexcharts'
import { PollVote } from '../types';
@Component({
  selector: 'app-vote-poll',
  templateUrl: './vote-poll.component.html',
  styleUrls: ['./vote-poll.component.css']
})
export class VotePollComponent implements AfterViewInit {
  @Input() voted: boolean;
  @Input() options: string[];
  @Input() results: number[];
  @Input() question: string;
  @Input() id: number;
  @Output() PollVoted: EventEmitter<PollVote> = new EventEmitter();

  voteForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.voteForm = this.fb.group
      (
        {
          selected: this.fb.control('', [Validators.required]),
        }
      )
  }
  submitForm() {
    const pollVoted: PollVote =
    {
      id: this.id,
      vote: this.voteForm.get('selected').value
    }
    this.PollVoted.emit(pollVoted)
  }
  generateChart() {
    const options: ApexCharts.ApexOptions =
    {
      series:
        [
          {
            data: this.results
          }
        ],
      chart:
      {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      legend: {
        show: false,
      },
      xaxis:
      {
        categories: this.options,
      },
    };
    const chart = new ApexCharts(document.getElementById('poll-results'), options);
    chart.render()
  }
  ngAfterViewInit() {
    if (this.voted) {
      this.generateChart()
    }
  }

}
