import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  

  constructor(private service: PostService) { 
   }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response =>{
        this.posts = response
      }, error => {
        alert('There is error')
        console.log(error)
      })
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value }
    input.value = ''

    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.id
        this.posts.splice(0, 0, post)
      }, 
      (error: Response) => {
        if(error.status === 400){
          // do something
        }
        else {
          alert('There is error')
          console.log(error)
        }
        
      })
  }

  updatePost(post){
    this.service.updatePost(post)
      .subscribe(response =>{
        console.log(response)
      }, error => {
        alert('There is error')
        console.log(error)
      })
  }

  deletePost(post){
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1)
      }, 
      (error: Response) => {
        if(error.status === 404)
          alert('This post has already been deleted.')
        else{
          alert('There is error')
          console.log(error)
        }
      })
  }
}