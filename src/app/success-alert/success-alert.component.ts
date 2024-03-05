import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [
    `
      p {
        padding: 1rem;
        background-color: palegreen;
        border: 2px solid green;
        font-weight: bold;
        border-radius: 0.5rem;
      }
    `,
  ],
})
export class SuccessAlertComponent {}
