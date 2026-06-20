import { Component, signal } from '@angular/core';

interface Skill {
  name: string;
  icon?: string;
}
interface Category {
  label: string;
  color: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  private words = ['learn', 'adapt', 'improve', 'grow'];
  word = signal('');
  private wi = 0;
  private ci = 0;
  private deleting = false;
  private timer: any;

  categories: Category[] = [
    {
      label: 'Frontend',
      color: '#2dd4bf',
      skills: [
        { name: 'Angular (v9–v20)', icon: 'assets/icons/angular.svg' },
        { name: 'React', icon: 'assets/icons/react.svg' },
        { name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
        { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
      ],
    },
    {
      label: 'Styling & UI',
      color: '#38bdf8',
      skills: [
        { name: 'Angular Material', icon: 'assets/icons/angular.svg' },
        { name: 'Tailwind CSS', icon: 'assets/icons/tailwind.svg' },
        { name: 'Material UI', icon: 'assets/icons/material.svg' },
        { name: 'CSS3', icon: 'assets/icons/css.svg' },
        { name: 'HTML5', icon: 'assets/icons/html.svg' },
      ],
    },
    {
      label: 'State & Performance',
      color: '#fbbf24',
      skills: [
        { name: 'NgRx' },
        { name: 'RxJS' },
        { name: 'Redux Toolkit' },
        { name: 'Context API' },
        { name: 'Lazy Loading' },
        { name: 'Code Splitting' },
        { name: 'PWA' },
        { name: 'Webpack / Vite', icon: 'assets/icons/vite.svg' },
      ],
    },
    {
      label: 'Backend & APIs',
      color: '#a78bfa',
      skills: [{ name: 'Node.js', icon: 'assets/icons/node.svg' }, { name: 'REST APIs' }],
    },
    {
      label: 'Testing & DevTools',
      color: '#f472b6',
      skills: [
        { name: 'Jest'},
        { name: 'Github', icon: 'assets/icons/github.svg' },
        { name: 'Git', icon: 'assets/icons/git.svg' },
        { name: 'Agile' },
        { name: 'Cross-browser Testing' },
      ],
    },
    {
      label: 'Database',
      color: '#fb923c',
      skills: [{ name: 'MySQL', icon: 'assets/icons/mysql.svg' }],
    },
    {
      label: 'Concepts',
      color: '#34d399',
      skills: [
        { name: 'Data Structures & Algorithms' },
        { name: 'Clean Architecture' },
        { name: 'Performance Optimization' },
      ],
    },
  ];

  ngOnInit() {
    this.tick();
  }
  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  private tick() {
    const cur = this.words[this.wi];
    if (!this.deleting) {
      this.ci++;
      this.word.set(cur.slice(0, this.ci));
      if (this.ci === cur.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.tick(), 1500);
        return;
      }
      this.timer = setTimeout(() => this.tick(), 90);
    } else {
      this.ci--;
      this.word.set(cur.slice(0, this.ci));
      if (this.ci === 0) {
        this.deleting = false;
        this.wi = (this.wi + 1) % this.words.length;
        this.timer = setTimeout(() => this.tick(), 300);
        return;
      }
      this.timer = setTimeout(() => this.tick(), 45);
    }
  }
}
