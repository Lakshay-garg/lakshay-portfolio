import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Portfolio } from './pages/portfolio/portfolio';

@Component({
  selector: 'app-root',
  imports: [Navbar,Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lakshay-portfolio');
}
