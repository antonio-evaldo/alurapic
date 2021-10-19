import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: 'https://cdn.myanimelist.net/images/characters/11/174517.jpg',
      description: 'Gon Freecs'
    },
    {
      url: 'https://cdn.myanimelist.net/images/characters/2/327920.jpg',
      description: 'Killua Zoldyck'
    },
  ];

}