import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-pipe';
  count: number = 123456;
  dcValue: number = 3.1462358;
  price: number = 99.99;
  today: Date = new Date();
  postObj: object = {
    id: 1,
    postTitle: 'Post 1',
  };

  postArray: Array<string> = [
    'post 1',
    'post 2',
    'post 3',
    'post 4',
    'post 5',
    'post 6',
  ];
  userdetails = {
    name: 'User 1',
    city: 'Berlin',
    contryCode: 'DE',
  };

  dummyText: string =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem impedit, et ab quas dolore mollitia illum! Suscipit nesciunt sequi laudantium! At recusandae perferendis illum soluta neque voluptas blanditiis aliquid error.';

  constructor() {}
}
