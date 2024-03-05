import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [
    `
      p {
        padding: 1rem;
        background-color: mistyrose;
        border: 2px solid red;
        font-weight: bold;
        border-radius: 0.5rem;
      }
    `,
  ],
})
export class WarningAlertComponent {}
