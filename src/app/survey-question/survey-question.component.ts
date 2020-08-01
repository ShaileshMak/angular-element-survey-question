import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-survey-question',
  template: `
    <div>
      <div>
        <h2>{{ title }}</h2>
      </div>
      <h4><slot name="question">Default Question</slot></h4>
      <form (ngSubmit)="handleFormSubmit()" [formGroup]="surveyForm">
        <div
          class="form-check form-check-inline"
          *ngFor="let option of options; index as i"
        >
          <input
            id="option{{ i }}"
            class="form-check-input"
            type="radio"
            value="{{ option }}"
            formControlName="radioOption"
          />
          <label for="option{{ i }}" class="form-check-label">{{
            option
          }}</label>
        </div>
        <button type="submit" [disabled]="!surveyForm.valid">
          Save
        </button>
      </form>
    </div>
  `,
  styles: [
    `
      div {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
      }
      input {
        margin-left: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        background-color: gray;
        border-radius: 5px;
        border: none;
        padding: 10px 15px;
        font-size: 1rem;
        color: white;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SurveyQuestionComponent implements OnInit {
  @Input() public title: string;
  @Input() public question: string;
  @Input() public options: Array<string>;
  @Output() public onFormSubmit = new EventEmitter<boolean>();
  public surveyForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private el: ElementRef) {}

  ngOnInit(): void {
    this.surveyForm = this.formBuilder.group({
      radioOption: '',
    });
  }

  handleFormSubmit() {
    console.log('Handle Form Submit called');
    this.onFormSubmit.emit(true);
    const domEvent = new CustomEvent('survey-submit-event', {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: this.surveyForm.get('radioOption'),
    });
    this.el.nativeElement.dispatchEvent(domEvent);
  }
}
