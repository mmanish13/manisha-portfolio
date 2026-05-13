import { Component } from '@angular/core';
import { Portfolio } from './portfolio/portfolio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Portfolio],
  template: `<app-portfolio></app-portfolio>`,
})
export class App {}
