import { Component, Input, inject } from '@angular/core';
import { BdService } from '../bd.service';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [],
  templateUrl: './play.component.html',
  styleUrl: './play.component.css'
})
export class PlayComponent {
  @Input() playlist: any;
  private bd=inject(BdService)

  

}
