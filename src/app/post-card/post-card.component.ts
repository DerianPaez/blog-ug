import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent {
  @Input() id: string = '';
  @Input() category: string = '';
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() desc: string = '';
  @Input() img?: string = '';
  @Input() link: string = '';
}
