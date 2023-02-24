### Feedback Widget for Websites

This is a react component to display a feedback widget at the bottom right of the screen. Users can provide optional rating and feedback text using it, which will be passed to callback function as (rating, feedbacktext).

#### Installation

```npm install @karthik1984/feedback-widget```

#### How to use
A simple example is as below

```
import Feedback from '@karthik1984/feedback-widget'
import '@karthik1984/feedback-widget/dist/App.css'
function App() {
  return (
    <div>
      <Feedback />
    </div>
  );
}
```

Parameters

| Parameter | Required / Optional | Default |
| ------------- | ------------- | ----------- |
| title | Optional  | "Feedback" |
| bgcolor | optional | "rgba(255,255,255,0.8)" |
| callback | optional | callback(rating,textdata) |