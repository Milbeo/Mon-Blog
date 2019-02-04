import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() blogTitle: string;
  @Input() blogContent: string;
  @Input() blogLoveIts: number;
  @Input() blogDate: string;

  constructor() { }

  ngOnInit() {
  }

  onILoveIt() {
    this.blogLoveIts += 1;
  }

  onIDontLoveIt() {
    this.blogLoveIts -= 1;
  }

}
