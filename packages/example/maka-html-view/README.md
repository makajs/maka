# maka-html-view

## src/index.js
```js
import view from './view.html'
```

## src/view.html
```html
<div class="maka-html-view">
    <div>{{data.content + data.input}}</div>
    <input placeholder="world" value="{{data.input}}" onChange="{{$onChange}}" />
</div>
```
