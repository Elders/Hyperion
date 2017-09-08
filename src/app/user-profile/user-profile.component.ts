import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../services/posts.service';
import {Post} from '../services/post';


@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less'],
  providers: [PostsService]
})
export class UserProfileComponent implements OnInit {
  post: Post;

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) {}

  ngOnInit() {
    console.log('user-profile baby');
     this.activatedRoute.params.subscribe((params: Params) => {
        let userId = params['id'];
        console.log(userId);

        this.getPost(userId);
      });
   
  }
   getPost(id: number){
     this.postsService.getPost(id).subscribe(post => {``
        this.post = post;
    });
   }
  
}
