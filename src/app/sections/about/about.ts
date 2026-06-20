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
    { value: '3', label: 'Companies' },
    { value: '8+', label: 'Apps shipped' },
    { value: '70%', label: 'Test coverage' },
  ];

  // tech you want highlighted as chips under the bio
  focus = ['Angular', 'TypeScript', 'Node.js', 'React.js', 'REST APIs', 'Angular Material'];
}
