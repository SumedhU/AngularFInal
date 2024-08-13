import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class EventDetailComponent {
  @Input() event: any;
}
