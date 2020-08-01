# angular-element-survey-question

Web Component using Angular ELEMENT for survey question

Inline-style:
![alt text](https://github.com/ShaileshMak/angular-element-survey-question/blob/master/survey-web-component-screen-shot.png?raw=true "Survey question web component (Angular ELEMENT)")

-Build web component

Execute following command

```
npm install
npm run build:elements
```

This will create distributable web component in element folder.

Required Properties

- 'title' type String
- 'question' type String
- 'options' type Array of string

Survey save event 'survey-submit-event'

Access the web component in HTML

SAMPLE HTML
also you can find in elements folder elements/index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- Sending
          TITLE as property
          QUESTION as slot
          OPTIONS using javaScript by settting dynamic property
      -->
    <survey-question title="Angular Element Survey Example">
      <h4 slot="question">Who is best Cricket batsman</h4>
    </survey-question>
    <script src="survey-question.js"></script>
    <script>
      var el = document.querySelector("survey-question");
      if (el) {
        /*
        Sending
        OPTIONS using javaScript by settting dynamic property
        */
        el.options = [
          "Sachin Tendulkar",
          "Rahul Dravid",
          "Saurab Ganguli",
          "VVS Lakshman",
        ];
        el.addEventListener("survey-submit-event", (event) => {
          console.log("Selected Option: ", event.detail.value);
        });
      }
    </script>
  </body>
</html>

```
