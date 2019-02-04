import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-blog';

  blogs = [{
    title: 'test 1',
    content: 'je suis content de faire les tuto OpenClassRoom',
    loveIts: 1,
    created_at: '01/02/2019'
    },
    {
      title: 'test 2',
      content: 'je ne suis pas content de faire les tuto OpenClassRoom',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'test 3',
      content: 'je ne sais si je doit être content de faire les tuto OpenClassRoom',
      loveIts: 0,
      created_at: new Date()
    }
    ];

}
