
font-awesome application for registering the react-fontawesome component

## Usage
Your application can use react-fontawesome components by add font-awesome dependency.

1. Add dependency
```bash
$ maka add font-awesome
```

2. Modify the view
```javascript
const view = {
    component: 'div',
    children: [{
        component: 'FA',
        style: { fontSize: 30},
        name: 'rocket'
    }]
}
```

3. Modify the index.html
```html
<script>
    window.main = function (maka) {
        maka.load(['font-awesome']).then(()=>{
            maka.render('yourApp','app')
        })
    }
<script>
```

## Download and run

1. Download
2. Decompress
3. Enter decompress directory
4. Run
```bash
$ yarn install
$ yarn start
```

## License

MIT

