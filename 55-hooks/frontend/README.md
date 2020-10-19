State and Events
===

## SWBATs
- [ ] Add event handlers to elements in React
- [ ] Explain why we have Synthetic Events
- [ ] Instantiate `state` inside and outside of the `constructor`
- [ ] Create event handler callbacks that manipulate `state`
- [ ] Trigger rerenders by calling `setState`
- [ ] Manipulate the DOM by changing values in `state` instead of using vanilla JS
- [ ] Correctly choose when to use `props` vs `state`, and explain why one would use one or the other

## Outline
- [ ] Review [React Docs on Events](https://reactjs.org/docs/events.html)
- [ ] Handle events and introduce state by creating a click counter
- [ ] Use `setState` to update state in a component
- [ ] Use inverse data flow to update state in a parent component from a child component

## Lecture Notes
Features:
- Click Counter (demo of state + events)
- Favorite toggle
- Filter by category
- Other features? (search, pagination, etc...)

### Using Events
In vanilla JS, our steps for handling events looked likes thi: 

1. Find piece of DOM 
  - `const beef = document.getElementById("beef")`
2. Add event listener to that piece 
  - `beef.addEventListener`
3. Give callback to event listener (remove, add, etc.)
  - `beef.addEventListener("click", () => { console.log("BEEF!") })`

In React, we don't have to do step 1, we can skip directly to step 2 by adding event handlers directly to our JSX. We still must supply the event handler with a callback.

For example, if we're trying to implement a click handler on a button, we could do so in a Class Component by passing a callback function to the onClick attribute of an element:

```js
class Counter extends React.Component {
  
  render() {
    return (
      <button onClick={() => console.log('clicked!')}>
        Click Me
      </button>
    )
  }
} 
```

Events can only be attached to DOM elements, we can't attach event listeners to our components:

```js
class Counter extends React.Component {
  
  render() {
    return (
      <div>
        <button onClick={() => console.log('clicked!')}>
          Click Me
        </button>
        <MyCustomButton onClick={() => console.log('will never fire')}>
          Click Me
        </MyCustomButton>
      </div>
    )
  }
} 
```

If we want to create a helper function for the callback, we need to make sure it's bound to our class so it has access to the instance of the component (`this`):

```js
class Counter extends React.Component {
  
  handleClickUnbound() {
    console.log("this is:", this) // this will be undefined
  }

  handleClickBound = () => {
    console.log("this is:", this) // this will be the Counter component instance
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickUnbound}>I lose `this`</button>
        <button onClick={this.handleClickBound}>I keep `this`</button>
      </div>
    )
  }
} 
```


### Synthetic Events
Rather than working with the native `event` object in the browser, React passes a [Synthetic Event](https://reactjs.org/docs/events.html) object to our event handlers. Synthentic events ensure that you can use the `event` object in the same way regardless of browser or machine. This comes back to the `learn once, write anywhere` principle.

Otherwise, events are more or less the same as they are in vanilla JS.

Because the `event` object in React is a Synthetic Event that is [pooled](https://reactjs.org/docs/events.html#event-pooling), the event loses its value after some time. This means that in asynchronous events (intervals, timeouts, fetches) events will lose their values. If you need to use the `event` object for some code that will run in the future, use `event.persist()` to keep values around. (Note: this is a rare use case: it's a good thing to know, but you won't likely have to use `event.persist()` very much in your code.)

### State
State is used for data that needs to be dynamic. Where props are passed down from parents to children and are static, values stored in state are meant to change, especially as the user interacts with the DOM. 

This is a key component of declarative programming in React: we tie our components to our state by integrating values in state into logic (e.g. conditional rendering). This way, changes in state eventually cause changes to the DOM.

To define state in a Class Component, we can do something like this:

```js
class Counter extends React.Component {
  state = {
    count: 0
  }

  render() {
    return (
      <button>Count: {this.state.count}</button>
    )
  }
}
```

(In older React code, you may also see `this.state` assigned in the class's constructor, but because of the requirement to call `super` in the constructor as well, this syntax is quite verbose. [Class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields) make the syntax we're using in the example above possible.)

`setState` is a function inherited from `React.Component` and is used to change state. You MUST use `setState` if you wish to rerender your component - direct mutations to state will NOT trigger a rerender.

For example:

```js
class Counter extends React.Component {
  state = {
    count: 0
  }

  handleClick = () => {
    // NEVER DO THIS!
    this.state.count += 1

    // THIS IS THE CORRECT WAY
    this.setState({ 
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>Count: {this.state.count}</button>
    )
  }
}
```

`setState` is asynchronous - this means that code written immediately after a `setState` will not see changes in your state. If you wish to call a function after state has been changed, you can pass a callback as the second argument to `setState`:

```js
class Counter extends React.Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({ 
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count) // this console.log in the callback fn run AFTER state is updated, so count will show the updated value
    })


    console.log(this.state.count) // this console.log will run BEFORE state is updated, so count will lag behind
  }

  render() {
    return (
      <button onClick={this.handleClick}>Count: {this.state.count}</button>
    )
  }
}
```

`setState` can take an object OR a function as its first argument. Since [updates to state and props may be asynchronous](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous), you should use the function version of `setState` when you intend to use the previous state or props values when writing the new state values. 

```js
class Counter extends React.Component {
  state = {
    count: 0
  }

  handleClick = () => {
    // first argument is a callback fn that will receive the previous state and props as arguments
    // it must return an object representing the next state
    this.setState(prevState => { 
      return { count: prevState.count + 1 }
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>Count: {this.state.count}</button>
    )
  }
}
```

### Deciding... should it be state? Where should state be?

From Step 3 of [Thinking in React](https://reactjs.org/docs/thinking-in-react.html): to decide what we need as `state`, ask three questions about each piece of data:

- Is it passed in from a parent via props? If so, it probably isn’t state.
- Does it remain unchanged over time? If so, it probably isn’t state.
- Can you compute it based on any other state or props in your component? If so, it isn’t state.

From Step 4 of Thinking in React: To decide where state should live, for each piece of state in your application:

- Identify every component that renders something based on that state.
- Find a common owner component (a single component above all the components that need the state in the hierarchy).
- Either the common owner or another component higher up in the hierarchy should own the state.
- If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

### Lifting State

If more than one component needs the same piece of state...

- Find the closest common ancestor
- Move state (and any functions that set state) to that ancestor
- Pass down state as props to any components that need it, and pass down callback function for setting state to any components that need to trigger updates to state

### Props

You can pass anything in `props`, even functions! We will often find ourselves passing functions down to children components - this is because while we might need state in one part of our application, our event listener might be attached to an entirely different component. To get around this, we define our state-changing functions in a component and then pass these functions downwards to be called by children components.

The concept of passing a callback function down as a prop to a child in order to update state in a parent component is known as [Inverse Data Flow](https://reactjs.org/docs/thinking-in-react.html#step-5-add-inverse-data-flow), and this is how we're able to have a child trigger some change in a parent component.

## Extras

- [React Events in Depth](https://www.youtube.com/watch?v=dRo_egw7tBc)
- [Function Binding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- [Class Field Declarations](https://github.com/tc39/proposal-class-fields)
- [event.target vs event.currentTarget](https://github.com/facebook/react/issues/5733)
- [JavaScript Event Delegation, and event.target vs. event.currentTarget](https://medium.com/@florenceliang/javascript-event-delegation-and-event-target-vs-event-currenttarget-c9680c3a46d1)
- [super() vs super(props)](https://overreacted.io/why-do-we-write-super-props/)