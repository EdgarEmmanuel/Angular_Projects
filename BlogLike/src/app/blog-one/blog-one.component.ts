import { Component, OnInit ,Input } from '@angular/core';
import { Blog } from 'src/Blog';


@Component({
  selector: 'app-blog-one',
  templateUrl: './blog-one.component.html',
  styleUrls: ['./blog-one.component.css']
})
export class BlogOneComponent implements OnInit {

  @Input() bg : Blog;

  numLike =0;
  numDislike=0;

  constructor() { }

  ngOnInit(): void {
  }

  Change(ev:Boolean){
    if(ev===true){
      this.numLike+=1;
    }else{
      this.numDislike+=1;
    }
  }

  setColor(){
    if(this.numDislike>this.numLike){
      return 'green';
    }else if(this.numDislike<this.numLike){
      return 'red';
    }else{
      return 'skyblue';
    }
  }

}
