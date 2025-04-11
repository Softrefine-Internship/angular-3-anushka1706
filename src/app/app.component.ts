import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fulltext: string = "This is a custom tooltip directive !"
  position!: string 
  fontSize!: string
  colorInput: string = "pink"

}
