import { Component, OnInit } from '@angular/core';
import { ImdbService } from '../event.service';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from '../event-detail/event-detail.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  standalone: true,
  imports: [CommonModule, EventDetailComponent],
})
export class EventsComponent implements OnInit {
  topMovies: any[] = [];
  error: string | null = null;

  constructor(private imdbService: ImdbService) {}

  ngOnInit(): void {
    this.fetchTop100Movies();
  }

  fetchTop100Movies(): void {
    this.imdbService.getTop100Movies().subscribe(
      (data) => {
        console.log('Top 100 Movies Data:', data);
        console.log(data[0].poster);
        
        this.topMovies = data; // Adjust based on the actual response structure
      },
      (error) => {
        console.error('Error fetching top 100 movies', error);
        this.error = 'Failed to load top 100 movies. Please try again later.';
      }
    );
  }
}
