import { Component } from '@angular/core';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  stats: Stat[] = [
    { value: '3+', label: 'Years experience' },
    { value: '4', label: 'Framework migrations' },
    { value: 'v9→v20', label: 'Angular versions shipped' },
    { value: '70%', label: 'Jest test coverage' },
  ];

  // tech you want highlighted as chips under the bio
  focus = ['Angular', 'TypeScript', 'RxJS', 'Node.js', 'Express.js', 'REST APIs', 'PWA', 'Jest'];
}
