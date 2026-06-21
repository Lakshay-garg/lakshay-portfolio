import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Social {
  label: string;
  value: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  name = '';
  email = '';
  message = '';
  honeypot = '';

  sending = signal(false);
  status = signal<'idle' | 'success' | 'error'>('idle');
  errorList = signal<string[]>([]); // all validation messages in one place

  private lastSubmit = 0;
  private emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Paste your Formspree endpoint here. Until then, falls back to mailto.
  private formEndpoint = 'https://formspree.io/f/mjgqbrzq';

  socials: Social[] = [
    {
      label: 'Email',
      value: 'garglakshay2002@gmail.com',
      href: 'mailto:garglakshay2002@gmail.com',
      icon: 'mail',
    },
    {
      label: 'LinkedIn',
      value: 'lakshay-garg',
      href: 'https://www.linkedin.com/in/lakshay-garg-00819319a/',
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      value: 'Lakshay-garg',
      href: 'https://github.com/Lakshay-garg',
      icon: 'github',
    },
  ];

  private validate(): string[] {
    const errs: string[] = [];
    const name = this.name.trim();
    const email = this.email.trim();
    const message = this.message.trim();

    if (!name) errs.push('Please enter your name.');
    else if (name.length < 2) errs.push('Your name looks too short.');
    else if (name.length > 80) errs.push('Your name looks too long.');

    if (!email) errs.push('Please enter your email.');
    else if (!this.emailRe.test(email)) errs.push('Please enter a valid email address.');
    else if (email.length > 254) errs.push('That email looks too long.');

    if (!message) errs.push('Please write a message.');
    else if (message.length < 10) errs.push('Your message is too short (min 10 characters).');
    else if (message.length > 2000) errs.push('Your message is too long (max 2000 characters).');
    else if ((message.match(/https?:\/\//gi) || []).length > 3)
      errs.push('Too many links — please remove some.');

    return errs;
  }

  async submit() {
    // honeypot — bots fill hidden fields
    if (this.honeypot) {
      this.status.set('success');
      this.name = this.email = this.message = '';
      return;
    }

    // rate limit
    const now = Date.now();
    if (now - this.lastSubmit < 15000) {
      this.errorList.set(['Please wait a few seconds before sending again.']);
      this.status.set('error');
      return;
    }

    // validate
    const errs = this.validate();
    if (errs.length > 0) {
      this.errorList.set(errs);
      this.status.set('error');
      return;
    }

    // passed — clear errors and send
    this.errorList.set([]);
    this.lastSubmit = now;
    this.sending.set(true);
    this.status.set('idle');

    const name = this.name.trim();
    const email = this.email.trim();
    const message = this.message.trim();

    if (!this.formEndpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:garglakshay2002@gmail.com?subject=${subject}&body=${body}`;
      this.sending.set(false);
      return;
    }

    try {
      const res = await fetch(this.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        this.status.set('success');
        this.name = this.email = this.message = '';
      } else {
        this.errorList.set([
          'Something went wrong sending your message. Please email me directly below.',
        ]);
        this.status.set('error');
      }
    } catch {
      this.errorList.set([
        'Something went wrong sending your message. Please email me directly below.',
      ]);
      this.status.set('error');
    } finally {
      this.sending.set(false);
    }
  }
}
