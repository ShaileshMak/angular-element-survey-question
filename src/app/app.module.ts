import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SurveyQuestionComponent } from './survey-question/survey-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [SurveyQuestionComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  entryComponents: [],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const surveyQuestionElement = createCustomElement(SurveyQuestionComponent, {
      injector: this.injector,
    });
    customElements.define('survey-question', surveyQuestionElement);
  }
}
