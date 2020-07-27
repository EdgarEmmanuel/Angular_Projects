import { Component } from '@angular/core';
import { Blog } from 'src/Blog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BlogLike';

  array : Blog[]=[
    {"Nom":"Moussa Diene","Country":"SENEGAL" , "Date":"27 Dec 2016"},
    {"Nom":"Abdou Niang","Country":"SENEGAL" , "Date":"27 Jan 2016"},
    {"Nom":"Ousmane Mballo","Country":"SENEGAL" , "Date":"27 Feb 2016"},
  ]

}
