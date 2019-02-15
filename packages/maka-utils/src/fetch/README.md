# post
```js
        var resp = await fetch.post('/v1/user/update', {id:1000, name:'New name'})
        console.log(resp)
```


# download
```js
        fetch.post('/v1/user/file', {name:'myself.png'})
        fetch.get('/v1/user/file?name=myself.png')
        //Set Http Header 'Content-Disposition' by Server
```


# upload
```js
    handleImageChange = async (files, type, index) => {
        if(type == "add"){
            let fileObj = files.filter(f => f.file && f.file.size != null)[0] 
            let formdata = new FormData();
            formdata.append("file", fileObj.file);
             
            let resp = await fetch.post('/v1/file/upload', null, null, {body: formdata, type:'file'})
            console.log(resp)   
        } 
    }

```

