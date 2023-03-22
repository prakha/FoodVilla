# NamasteReact



Q1. How do we create Nested Routes component in react??

To create nested routes in React Router DOM, you can use the Route component and nest it inside another Route component to define a child route. Here is an example:

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

function Products() {
  return (
    <div>
      <h2>Products</h2>
      <Switch>
        <Route exact path="/products" component={AllProducts} />
        <Route path="/products/:productId" component={ProductDetail} />
      </Switch>
    </div>
  );
}

function AllProducts() {
  return <h3>All Products</h3>;
}

function ProductDetail({ match }) {
  const { productId } = match.params;
  return <h3>Product Detail: {productId}</h3>;
}

function Home() {
  return <h2>Home</h2>;
}

In this example, we define two routes at the top level, one for the home page and one for the products page. Then, we define a child route for the products page inside the Products component. The child route includes two routes for the "All Products" page and the product detail page. The ProductDetail component uses the match prop to get the productId from the URL.

Note that the child routes are defined inside the Products component, which means they will be rendered in place of the Products component when the corresponding URL is matched. You can also use the Link component to create links to these nested routes, for example:


import { Link } from 'react-router-dom';

function AllProducts() {
  return (
    <div>
      <h3>All Products</h3>
      <ul>
        <li><Link to="/products/1">Product 1</Link></li>
        <li><Link to="/products/2">Product 2</Link></li>
      </ul>
    </div>
  );
}
In this example, we use the Link component to create links to the product detail pages using the productId parameter.


Q2. what is the order of life cycle method calls in class based component??

In React class-based components, the order of life cycle method calls can be divided into three main phases:

1.Mounting Phase: This phase starts when an instance of a component is created and mounted onto the DOM. The following methods are called in order during the mounting phase:

constructor()
static getDerivedStateFromProps()
render()
componentDidMount(

2. Updating phase: This phase starts when the component's state or props change. The following methods are called in order during the updating phase:
static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

3. Unmounting phase: This phase starts when the component is about to be removed from the DOM. The following method is called during the unmounting phase:

componentWillUnmount()
In React class-based components, the order of life cycle method calls can be divided into three main phases:

Mounting Phase: This phase starts when an instance of a component is created and mounted onto the DOM. The following methods are called in order during the mounting phase:

constructor()
static getDerivedStateFromProps()
render()
componentDidMount()
Updating Phase: This phase starts when the component's state or props change. The following methods are called in order during the updating phase:

static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
Unmounting Phase: This phase starts when the component is about to be removed from the DOM. The following method is called during the unmounting phase:

componentWillUnmount()
Additionally, there are some other less frequently used lifecycle methods:

static getDerivedStateFromError()
componentDidCatch()

Note that the componentWillMount, componentWillReceiveProps, and componentWillUpdate methods are deprecated as of React 17.0.0, so it is recommended to use the corresponding new methods instead.


Q4. why do we use componentDidMount??
--> componentDidMount is a lifecycle method in React class-based components that is called after the component has mounted or been inserted into the DOM. It is typically used to perform operations that require access to the DOM, such as fetching data from an API, setting up event listeners, or interacting with third-party libraries.

Here are some common use cases for componentDidMount -:
1. Fetching Data: If a component needs to fetch data from an API, componentDidMount is a good place to make the API call. The reason for this is that componentDidMount is called after the component has been mounted, so the component is guaranteed to have access to the DOM.
2. Setting up Event Listeners: If a component needs to respond to user interactions, such as clicks or keystrokes, componentDidMount is a good place to set up event listeners. This ensures that the component is fully mounted and ready to receive user input.
3. Interacting with Third-Party Libraries: If a component needs to interact with a third-party library, such as a charting library or a mapping library, componentDidMount is a good place to initialize and configure the library. This ensures that the library has access to the DOM and can be properly integrated with the component.

In summary, componentDidMount is a useful lifecycle method for performing operations that require access to the DOM. It is commonly used for fetching data, setting up event listeners, and interacting with third-party libraries.

Q5. Why do we use componentWillUnmount??

In React, componentWillUnmount is a lifecycle method that gets called just before a component is unmounted from the DOM. It gives the component a chance to do any necessary cleanup before it is removed from the page.

Q6. why do we use super(props) in constructor??

In React, when you create a class-based component, you need to define a constructor method to initialize the state and bind event handlers. When you define a constructor in a class-based component, you should always call super(props) as the first line of the constructor.

Here's Why:
1.Set up the context: In JavaScript, classes inherit from other classes. When you define a new class that extends from another class (like a React component), you need to call super() to set up the context and inherit the properties and methods of the parent class. In the case of a React component, you need to pass props to the parent constructor to initialize the component's props.
2.Access this object: When you call super(props), you're also creating a this object that you can use to reference the parent class's properties and methods. This allows you to use this.props and this.state to access the component's props and state within the constructor.


Q7. why cant we have the call back function of useEffect async??


In React, useEffect is a hook that allows you to perform side effects in function components. One of the rules of useEffect is that you can't make the callback function of useEffect asynchronous. Here's why:

1.Return value: The callback function of useEffect can optionally return a cleanup function that will be called before the next execution of the effect. If the callback function is an async function, it will always return a promise, which is not a valid cleanup function. React expects the cleanup function to be either undefined or a function.
2.Timing: The callback function of useEffect runs after the component is rendered and the DOM is updated. If the callback function is asynchronous, it could potentially cause a race condition where the state of the component is updated before the async operation is complete, leading to unexpected behavior.







