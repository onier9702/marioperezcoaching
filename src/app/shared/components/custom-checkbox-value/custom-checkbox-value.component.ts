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
  selector: 'app-custom-checkbox-value',
  templateUrl: './custom-checkbox-value.component.html',
  styleUrls: ['./custom-checkbox-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CustomCheckboxValueComponent implements OnChanges {
  public firstLabel = input.required<string>();
  public firstValue = input.required<number>();
  public secondLabel = input.required<string>();
  public secondValue = input.required<number>();
  public defaultValue = input<number>(1);
  public isDisabled = input<boolean>(false);

  public checkboxVariableValue = linkedSignal(() => this.defaultValue());

  public newCheckboxValue = output<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['defaultValue']) return;

    this.checkboxVariableValue.set(
      changes['defaultValue'].currentValue ?? true
    );
  }

  toggleCheckbox(value: number): void {
    if (this.isDisabled()) return;

    this.checkboxVariableValue.set(value);
    this.newCheckboxValue.emit(value);
  }
}
