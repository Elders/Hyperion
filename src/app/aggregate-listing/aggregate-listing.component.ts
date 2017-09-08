import { Component, Pipe, PipeTransform, OnInit } from '@angular/core';
import {AggregateServiceService} from '../services/aggregate-service.service';
import {IResults} from '../services/infra';
import {IResult} from '../services/infra';
import {FilterArrayPipe} from '../filter.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-aggregate',
  templateUrl: './aggregate-listing.component.html',
  styleUrls: ['./aggregate-listing.component.less'],
  providers: [AggregateServiceService]
})
export class AggregateListingComponent implements OnInit {
  results: IResults;
  private router: Router;
  private aggregateNumber: number;
  private show: boolean;
  private aggrId: string;

  constructor(
      private r: Router,
      private aggrService: AggregateServiceService) {
      this.show = false;
      this.router = r;
   }

  ngOnInit () {
    this.getAggregate();
  }

  check () {
    console.log(this.aggrId);
  };
   
  getAggregate (){
      this.aggrService.getAggregates().subscribe(x => {
          this.results = x;
          console.log(this.results);
      });
  }
  getAggregateId (id: string){
     this.aggrService.getAggregatesId(id).subscribe(x => {
          this.results = x;
          console.log(this.results);
      });
  }

}
