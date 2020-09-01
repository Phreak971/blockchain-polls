import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  @Input() question:string;
  @Input() votes:number[];
  @Input() voted:boolean[];
  @Input() image:string[];
  nofVotes:number;
  constructor() { 

  }

  ngOnInit(): void {
    if(this.votes.length)
    {
      this.nofVotes = this.votes.reduce((acc,curr)=>{
        return acc+= curr
      })
    }
  }

}
