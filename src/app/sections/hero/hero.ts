import { Component, OnInit, OnDestroy, signal } from '@angular/core';

interface Planet {
  name: string;
  icon: string;
  angle: number;
}

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
  name = 'Lakshay Garg';

  // ---- rotating typewriter roles ----
  private roles = ['Full Stack Developer', 'Web Developer', 'Front-end Developer'];
  typedRole = signal(''); // what's currently shown
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: any;

  // ---- orbit icons ----
  ring3Planets: Planet[] = [
    { name: 'Angular', icon: 'assets/icons/angular.svg', angle: 270 },
    { name: 'JavaScript', icon: 'assets/icons/javascript.svg', angle: 180 },
    { name: 'React.js', icon: 'assets/icons/react.svg', angle: 0 },
    { name: 'GitHub', icon: 'assets/icons/github.svg', angle: 90 },
  ];
  ring4Planets: Planet[] = [
    { name: 'Node.js', icon: 'assets/icons/node.svg', angle: 225 },
    { name: 'MySQL', icon: 'assets/icons/mysql.svg', angle: 135 },
    { name: 'Git', icon: 'assets/icons/git.svg', angle: 45 },
    { name: 'TypeScript', icon: 'assets/icons/typescript.svg', angle: 315 },
  ];

  ngOnInit(): void {
    this.tick();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private tick(): void {
    const current = this.roles[this.roleIndex];

    if (!this.deleting) {
      // typing forward
      this.charIndex++;
      this.typedRole.set(current.slice(0, this.charIndex));
      if (this.charIndex === current.length) {
        // full word shown — pause, then start deleting
        this.deleting = true;
        this.timer = setTimeout(() => this.tick(), 1400);
        return;
      }
      this.timer = setTimeout(() => this.tick(), 75);
    } else {
      // deleting
      this.charIndex--;
      this.typedRole.set(current.slice(0, this.charIndex));
      if (this.charIndex === 0) {
        // word cleared — move to next role
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        this.timer = setTimeout(() => this.tick(), 300);
        return;
      }
      this.timer = setTimeout(() => this.tick(), 40);
    }
  }
}
