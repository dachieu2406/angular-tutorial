import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/error/app-error';
import { NotFoundError } from '../common/error/not-found-error';
import { BadRequestError } from '../common/error/bad-request-error';

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
    this.service.getAll()
      .subscribe(response =>{
        this.posts = response
      })
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value }
    input.value = ''

    this.service.create(post)
      .subscribe(response => {
        post['id'] = response.id
        this.posts.splice(0, 0, post)
      }, 
      (error: AppError) => {
        if(error instanceof BadRequestError){
          // do something
        }
        else throw error
      })
  }

  updatePost(post){
    this.service.update(post)
      .subscribe(response =>{
        console.log(response)
      }, 
      // (error: AppError) => {    Comment it because error handle in Global Error Handler
      //   alert('There is error')
      //   console.log(error)
      // })
      )
  }

  deletePost(post){
    this.service.delete(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1)
      }, 
      (error: AppError) => {
        if(error instanceof NotFoundError)
          alert('This post has already been deleted.')
        else throw error;
      })
  }
}
