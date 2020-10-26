# Setting up Frontend
1. `create-react-app project_name`
2. `npm install react-router-dom`, `npm install redux`, `npm install react-redux`


# Setting up Backend
1. `rails new NAME --api --database=postgresql`
2. Add `jwt`, `active_model_serializers`, and uncomment `rack-cors` and `bcrypt` in the Gemfile
3. Set up `initializers/cors.rb`
4. Generate your resource
5. Write out your routes


# Setting up Redux


1. Set up the store

```js
let initialStateOfFoxReducer = {
  foxes: []
}

let foxReducer = (state = initialStateOfFoxReducer, action) => {
  switch(action.type){
    default:
      return state
  }
}

let storeObj = createStore(foxReducer)
```

2. Pass the store into the `<Provider/>`

```js
ReactDOM.render(
  <Provider store={storeObj}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
```

[Redux Notes](https://gist.github.com/alexgriff/0e247dee73e9125177d9c04cec159cc6)