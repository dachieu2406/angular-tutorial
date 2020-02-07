import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  courses = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
    { id: 3, name: 'course 3' }
  ]

  constructor() { }

  ngOnInit() {
  }
  onAdd(){
    this.courses.push({id: 4, name: 'course4'})
  }
  onRemove(course){
    let index = this.courses.indexOf(course)
    this.courses.splice(index, 1)
  }
  onChange(course){
    course.name = "Updated"
  }
}
