import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = "This is course Title" // property binding
  urlImage = "https://dienloi.com/wp-content/uploads/2017/12/html.png" // attribute binding
  isActive = false // class binding
  constructor() { }

  ngOnInit() {
  }

  onDivClick($event){
    console.log("Div Clicked", $event);
  }

  onSave($event){
    $event.stopPropagation();// stop event bubbling up
    console.log("Button Clicked", $event);
  }

  // template variable
  onKeyUp(email){
    console.log(email)
  }

  // Two ways binding
  email1 = "me@example.com";
  onKeyUp1(){
    console.log(this.email1)
  }

  // Pipes
  course = {
    title: "This is title",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2019,1,3)
  }

  // Customer pipe
  lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
