import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-badge',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './badge.html',
  styleUrl: './badge.css'
})
export class Badge {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
