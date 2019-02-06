import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  hitList = [{id: 1, name: 'asdf'}]
  onChangeName(e: Event) {
    this.name = (e.target as HTMLInputElement).value;
  }
}
