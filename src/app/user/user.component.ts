import { Component, Pipe, PipeTransform, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {AggregateServiceService} from '../services/aggregate-service.service';
import {Post} from '../services/post';
import {IResults} from '../services/infra';
import {IResult} from '../services/infra';
import {ICommits} from '../services/infra';
import {FilterArrayPipe} from '../filter.pipe';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
  providers: [PostsService, AggregateServiceService]
})
export class UserComponent implements OnInit {
  public filterText: any;
  posts:Post[];
  result: IResults;
  post: Post;
  havePosts= true;
  private router: Router;

  constructor(
      private postsService: PostsService, 
      private r: Router,
      private aggrService: AggregateServiceService) {

      this.router = r;
   }

  ngOnInit() {
    this.getPosts(); 
    this.getAggregate();
  }

  getPosts () {
     this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
    });
  }

  getAggregate (){
      this.aggrService.getAggregates().subscribe(x => {
          this.result = x;
      });
  }
   goToProductDetails(id) {
      this.router.navigate(['/user', id])
    }

  //   searchPosts(id:string){
//     this.dataAvailableById= true;
//     this.post = null;
//     this.postsService.searchPosts(id)
// 	    .subscribe(
//                 data => {  
//         	        if(data.length > 0) {
// 		             this.post = data[0]; 
// 		    } else {
// 			    this.dataAvailableById= false; 
// 		    }	
// 	    }
// 	);     
  
// } 

}
