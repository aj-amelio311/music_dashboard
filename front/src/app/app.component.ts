import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
   trigger('slide', [
     transition("void=>*", [
       style({transform: "translateY(-90px)"}),
       animate(250)
     ])
   ]),
   trigger('fade', [
     transition("void=>*", [
       style({opacity: 0}),
       animate(250)
     ])
   ])
 ]
})
export class AppComponent {
  title = 'app';

  onActivate(event) {
      window.scroll(0,0);
  }

}
