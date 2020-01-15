import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LoginForm';
  private username = '';
  private password = '';
  private correct = '';
  private incorrect = '';
  private hide = false;

  buttonClick() {
    if(this.username === 'Kreggy' && this.password === 'heslo666') {
      this.correct = 'Logged in successfully';
      this.hide = true;
    }
    else {
      this.incorrect = 'Wrong username or pasword';
    }
  }
}
