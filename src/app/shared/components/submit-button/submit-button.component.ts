import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SpinnerComponent],
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss'],
  host: {
    class: 'd-flex mt-5',
    // class: 'd-flex justify-content-center mt-5',
    // '[class.w-100]': 'hasFullWidth()', // if you need to pass some data to parent component <app-submit-button...
  },
})
export class SubmitButtonComponent {
  public isFormSubmitting = input<boolean>(false);
  public primaryText = input<string>('');
  public secondaryText = input<string>('');
  public attributeName = input<string | null>(null);
  public attributeClass = input<string | null>(null);
}
