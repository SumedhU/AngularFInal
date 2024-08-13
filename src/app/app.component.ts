import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NavigationComponent, RouterModule]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
