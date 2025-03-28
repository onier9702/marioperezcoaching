import {
  ChangeDetectionStrategy,
  Component,
  input,
  linkedSignal,
  OnChanges,
  output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CustomCheckboxComponent implements OnChanges {
  public affirmativeLabel = input<string>('SI');
  public negativeLabel = input<string>('NO');
  public checkboxValue = input<boolean>(true);
  public isDisabled = input<boolean>(false);

  public checkboxVariableValue = linkedSignal(() => this.checkboxValue());

  public newCheckboxValue = output<boolean>();

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['checkboxValue']) return;

    this.checkboxVariableValue.set(
      changes['checkboxValue'].currentValue ?? true
    );
  }

  toggleCheckbox(value: boolean): void {
    if (this.isDisabled()) return;

    this.checkboxVariableValue.set(value);
    this.newCheckboxValue.emit(value);
  }
}
