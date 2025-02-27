import React from 'react'
import './ReactQuestion.css'
import ScrollButton from '../../ScrollButton/ScrollButton';
const ReactQuestion = () => {
  const questions = [
    {
      Qno: 1,
      Ques: "what is React js?",
      Ans: "React.js is a JavaScript library for building user interfaces, using a component-based architecture. It enables efficient updates with the Virtual DOM and allows developers to create interactive, dynamic web applications",
    },
    {
      Qno: 2,
      Ques: "What  is  Single Page Application (SPA)? ",
      Ans: "A Single Page Application is a web application that loads a single HTML page and dynamically updates content without refreshing the entire page.",
    },
    {
      Qno: 3,
      Ques: "What is a Multi-Page Application MPA?",
      Ans: "A Multi-Page Application involves multiple pages, each loaded separately when the user navigates to a new page.",
    },
    {
      Qno: 4,
      Ques: "What is the difference between a library and a framework? ",
      Ans: "A library is a collection of pre-written code that helps you perform common tasks, while a framework provides a structure and set of guidelines for developing applications.",
    },
    {
      Qno: 5,
      Ques: "What is React Router? ",
      Ans: "React Router is a library that enables navigation between different views in a React application, allowing you to create SPAs with multiple views.",
    },
    {
      Qno: 6,
      Ques: "What is React's Context API? ",
      Ans: "The Context API is a way to share values like state or functions between components without passing props manually.",
    },
    {
      Qno: 7,
      Ques: ". What is a higher-order component HOC in React? ",
      Ans: " A higher-order component is a function that takes a component and returns a new component with additional props or behavior.",
    },
    {
      Qno: 8,
      Ques: "What is styled-components in React? ",
      Ans: "Styled-components is a library that allows you to write CSS-in-JS, styling your components directly within JavaScript.",
    },
    {
      Qno: 9,
      Ques: "What is PropTypes in React? ",
      Ans: "PropTypes is a type-checking feature in React used to validate the props passed to a component.",
    },
    {
      Qno: 10,
      Ques: "What is the role of React Hooks?",
      Ans: "React Hooks allow functional components to have state and side effects, enabling features like useState, useEffect, etc., without writing class componenets.",
    },
    {
      Qno: 11,
      Ques: "What is the useState hook? ",
      Ans: "The useState hook is used to add state to functional components in React.",
    },
    {
      Qno: 12,
      Ques: "What is the useEffect hook?",
      Ans: "The useEffect hook is used to perform side effects in function components, such as fetching data or updating the DOM. ",
    },
    {
      Qno: 13,
      Ques: "What is a controlled component in React?",
      Ans: "A controlled component is a form element whose value is controlled by React state.",
    },
    {
      Qno: 14,
      Ques: "What is the purpose of keys in React? ",
      Ans: "Keys are used in React to identify which items in a list have changed, been added, or removed, improving the performance of rendering lists. ",
    },
    {
      Qno: 15,
      Ques: "What is the Virtual DOM in React?",
      Ans: "The Virtual DOM is a lightweight representation of the real DOM in memory. React uses it to efficiently update the UI by comparing the current state of the UI with the previous one and only making necessary changes.",
    },
    {
      Qno: 16,
      Ques: "What is Component-based Architecture in React?",
      Ans:"React follows a component-based architecture, meaning the UI is divided into independent, reusable components that manage their own state and render UI elements.",
    },
    {
      Qno: 17,
      Ques: "What are React Hooks? ",
      Ans: "React Hooks are functions that allow you to use state and other React features in functional components, eliminating the need for class components.",
    },
    {
      Qno: 18,
      Ques: "What is JSX JavaScript XML in React? ",
      Ans: "JSX is a syntax extension for JavaScript that allows you to write HTML elements in JavaScript, which React then compiles into JavaScript code.",
    },
    {
      Qno: 19,
      Ques: "What is the use of the useState hook in React? ",
      Ans: "The useState hook allows functional components to have state, enabling them to store and update values that trigger re-renders when they change.",
    },
      {
        Qno: 20,
        Ques: "What is the use of the useEffect hook in React?",
        Ans: "The useEffect hook is used to perform side effects in function components, such as fetching data, updating the DOM, or subscribing to events, after the component renders.",
      },
      {
        Qno: 21,
        Ques: "What are React Fragments?",
        Ans: "React Fragments allow you to group multiple elements without adding extra nodes to the DOM, helping keep the DOM structure cleaner.",
      },
      {
        Qno: 22,
        Ques: "What is React's one-way data flow?",
        Ans: "In React, data flows in one direction: from parent components to child components via props. This makes the application easier to debug and manage. ",
      },
      {
        Qno: 23,
        Ques: "What is the significance of the key prop in React? ",
        Ans: "The key prop is used in lists of elements to help React identify which items have changed, are added, or are removed, improving performance during re-renders.",
      },
    {
      Qno: 24,
      Ques: "What is Context API in React?",
      Ans: "The Context API allows you to pass data through the component tree without having to manually pass props down at every level, making state management easier for large applications.",
    },
    {
      Qno: 25,
      Ques: "What is JSX?",
      Ans: "JSX JavaScript XML is a syntax extension for JavaScript that allows you to write HTML elements in JavaScript.",
    },
    {
      Qno: 26,
      Ques: "Why do we use JSX in React?",
      Ans:"JSX provides a more readable and concise way to write components and elements, making it easier to create and manage UI in React.",
     },
     {
      Qno: 27,
      Ques: "Is JSX necessary in React?",
      Ans:"No, JSX is not required in React, but it is widely used because it simplifies the process of writing UI components. ",
     },
     {
      Qno: 28,
      Ques: "Can JSX be used in plain JavaScript?",
      Ans:"No, JSX needs to be compiled into JavaScript using a tool like Babel before it can run in the browser. ",
     },
     {
      Qno: 29,
      Ques: "How is JSX different from HTML?",
      Ans:"JSX is a syntax extension for JavaScript, whereas HTML is a markup language. In JSX, attributes use camelCase naming conventions, and elements must be properly closed.",
     },
     {
      Qno: 30,
      Ques: "What are some common rules of JSX?",
      Ans:"JSX elements must be wrapped in a single parent element, tag names must be lowercase, and all JSX tags must be properly closed.",
     },
     {
      Qno: 31,
      Ques: "What is the rule for self-closing tags in JSX?",
      Ans:"In JSX, self-closing tags (like Error! Filename not specified., ) must have a closing slash.",
     },
     {
      Qno: 32,
      Ques: "How do you handle events in JSX? ",
      Ans:"You can handle events in JSX by passing event handler functions to the corresponding event attributes (e.g., onClick , onChange ).",
     },
     {
      Qno: 33,
      Ques: "What is the role of Babel in JSX? ",
      Ans:"Babel compiles JSX into JavaScript code that browsers can understand, transforming the syntax and ensuring compatibility.",
     },
     {
      Qno: 34,
      Ques: "What are props in React?",
      Ans:"Props (short for properties) are arguments passed into React components, allowing data to be passed from a parent component to a child component. ",
     },
     {
      Qno: 35,
      Ques: "Can props be changed within a component? ",
      Ans:"No, props are immutable in the child component. They can only be modified by the parent component.",
     },
     {
      Qno: 36,
      Ques: "How do you pass props in React? ",
      Ans:"You pass props by adding them as attributes to a component when rendering it.",
     },
     {
      Qno: 37,
      Ques: "What are default props in React?",
      Ans:"Default props allow you to specify default values for props when they are not provided by the parent component.",
     },
     {
      Qno: 38,
      Ques: "How do you set default props for a component in React? ",
      Ans:"Default props can be set using the defaultProps property on the component, e.g., Component.defaultProps = { name: 'Guest' }; .",
     },
     {
      Qno: 39,
      Ques: "What  are React Fragments?",
      Ans:"React Fragments are a way to group multiple elements without adding an extra node to the DOM, avoiding unnecessary wrapper elements. ",
     },
     {
      Qno: 40,
      Ques: "How do you use a Fragment in React? ",
      Ans:"You can use a Fragment in React with React.Fragment> or the shorthand syntax <> to group elements",
     },
     {
      Qno: 41,
      Ques: "What is a stateless component in React? ",
      Ans:"A stateless component is a component that does not have its own state. It simply receives data via props and renders UI based on that data. ",
     },
     {
      Qno: 42,
      Ques: "What is a stateful component in React? ",
      Ans:"A stateful component is a component that has its own internal state, which can change over time, and triggers a re-render when the state changes. ",
     },
     {
      Qno: 43,
      Ques: "How do you define a stateful component in React?",
      Ans:"A stateful component is typically defined using useState (in functional components) or the this.state object (in class components).",
     },
     {
      Qno: 44,
      Ques: "What is the useState hook in React? ",
      Ans:"The useState hook is used to add state to functional components in React. It returns an array with the current state value and a function to update that state.",
     },
     {
      Qno: 45,
      Ques: "How do you initialize state with the useState hook? ",
      Ans:"You initialize state in a functional component by calling useState(initialValue) , where initialValue is the starting value of the state variable. ",
     },
     {
      Qno: 46,
      Ques: "When should you use a functional update in useState ?",
      Ans:"You should use a functional update when the new state depends on the previous state, ensuring that you get the latest state value",
     },
     {
      Qno: 47,
      Ques: "What is the	hook in React?",
      Ans:"The	hook is used to create a reference to a DOM element or a value that persists across renders without causing a re-render when updated.",
     },
     {
      Qno: 48,
      Ques: "98.	What is props drilling in React?",
      Ans:"You can avoid props drilling by using the Context API, which allows you to share state between components without passing props down through multiple layers of the component tree.",
     },
     {
      Qno: 49,
      Ques: "What is the Context API in React?",
      Ans:"The Context API allows you to share values (like state or functions) across the component tree without explicitly passing them through each level of the tree via props.",
     },
     {
      Qno: 50,
      Ques: "How do you consume a context value in React?",
      Ans:"You consume a context value using the useContext hook or by using the Context.Consumer component",
     },
      {
        "Qno": 51,
        "Ques": "What is the purpose of the useState hook in React?",
        "Ans": "The useState hook is used to declare a state variable in a functional component, allowing it to hold and update a value over time."
      },
      {
        "Qno": 52,
        "Ques": "How do you initialize a state with useState in React?",
        "Ans": "You initialize a state by calling useState with an initial value: const [state, setState] = useState(initialValue)."
      },
      {
        "Qno": 53,
        "Ques": "Can the state value in useState be of any data type?",
        "Ans": "Yes, the state value in useState can be of any data type, such as string, number, boolean, array, or object."
      },
      {
        "Qno": 54,
        "Ques": "What is the difference between useState and this.state in class components?",
        "Ans": "In functional components, useState is used to declare state, while in class components, this.state and this.setState are used. useState returns an array with the current state value and a function to update it."
      },
      {
        "Qno": 55,
        "Ques": "How do you update the state with useState?",
        "Ans": "You update the state by calling the state setter function (from useState), like setState(newValue)."
      },
      {
        "Qno": 56,
        "Ques": "Can you use multiple useState hooks in a single component?",
        "Ans": "Yes, you can use multiple useState hooks in a single component, each managing a separate piece of state."
      },
      {
        "Qno": 57,
        "Ques": "What happens when you call the setState function returned by useState?",
        "Ans": "Calling the setState function will trigger a re-render of the component with the updated state value."
      },
      {
        "Qno": 58,
        "Ques": "How can you set the initial state based on a previous state?",
        "Ans": "To set the initial state based on the previous state, you can pass a function to setState, which receives the previous state as an argument and returns the new state."
      },
      {
        "Qno": 59,
        "Ques": "Is it possible to set an object or array as the state with useState?",
        "Ans": "Yes, you can set an object or array as state with useState, but you should make sure to treat them immutably when updating the state."
      },
      {
        "Qno": 60,
        "Ques": "What is the recommended way to update an array in state using useState?",
        "Ans": "The recommended way to update an array in state is to use the spread operator or array methods like map, filter, or concat to create a new array, then update the state with setState."
      },
        {
          "Qno": 61,
          "Ques": "What is the difference between props and state in React?",
          "Ans": "Props are read-only and passed from parent to child components, whereas state is mutable and managed within the component itself."
        },
        {
          "Qno": 62,
          "Ques": "What are functional components in React?",
          "Ans": "Functional components are JavaScript functions that return JSX. They can accept props as arguments and are simpler than class components."
        },
        {
          "Qno": 63,
          "Ques": "What are class components in React?",
          "Ans": "Class components are ES6 classes that extend React.Component. They can hold and manage state and lifecycle methods."
        },
        {
          "Qno": 64,
          "Ques": "What is JSX in React?",
          "Ans": "JSX is a syntax extension that allows you to write HTML-like code within JavaScript. It is then transpiled into JavaScript function calls."
        },
        {
          "Qno": 65,
          "Ques": "What is the purpose of the render method in React?",
          "Ans": "The render method in class components returns the JSX to be rendered to the DOM. In functional components, the return statement serves the same purpose."
        },
        {
          "Qno": 66,
          "Ques": "What is React DOM?",
          "Ans": "React DOM is the package that allows React to render components to the DOM. It manages the DOM tree and updates the UI efficiently."
        },
        {
          "Qno": 67,
          "Ques": "What is the difference between controlled and uncontrolled components?",
          "Ans": "Controlled components are form elements whose values are controlled by React state, while uncontrolled components maintain their own internal state."
        },
        {
          "Qno": 68,
          "Ques": "What are hooks in React?",
          "Ans": "Hooks are functions that allow you to use state and lifecycle features in functional components. Examples include useState, useEffect, and useContext."
        },
        {
          "Qno": 69,
          "Ques": "What is the useEffect hook in React?",
          "Ans": "The useEffect hook is used to perform side effects in functional components, such as fetching data, subscribing to events, or manually changing the DOM."
        },
        {
          "Qno": 70,
          "Ques": "How does the useEffect hook work in React?",
          "Ans": "useEffect takes a function as an argument, which is run after every render. You can also pass an optional dependency array to control when the effect should run."
        },
        {
          "Qno": 71,
          "Ques": "What are refs in React?",
          "Ans": "Refs provide a way to reference and interact with a DOM element or a class component instance directly."
        },
        {
          "Qno": 72,
          "Ques": "What is the purpose of the Context API in React?",
          "Ans": "The Context API provides a way to pass data through the component tree without having to manually pass props down at every level."
        },
        {
          "Qno": 73,
          "Ques": "How do you create a context in React?",
          "Ans": "You create a context in React using React.createContext(), which returns a provider and a consumer."
        },
        {
          "Qno": 74,
          "Ques": "How do you use context in React?",
          "Ans": "You can use context with the useContext hook or the Context.Consumer component to consume the context values."
        },
        {
          "Qno": 75,
          "Ques": "What is the purpose of React Router?",
          "Ans": "React Router is a library used for routing in React applications, enabling navigation between different views and components."
        },
        {
          "Qno": 76,
          "Ques": "How do you implement routing in React?",
          "Ans": "Routing in React is implemented using React Router, where you define Routes and Links to manage navigation between different components."
        },
        {
          "Qno": 77,
          "Ques": "What is the difference between HashRouter and BrowserRouter in React Router?",
          "Ans": "HashRouter uses the URL hash to manage routes, while BrowserRouter uses the HTML5 history API, offering cleaner URLs without the '#' symbol."
        },
        {
          "Qno": 78,
          "Ques": "What are props in React?",
          "Ans": "Props (short for properties) are read-only values passed from parent components to child components to configure or display data."
        },
        {
          "Qno": 79,
          "Ques": "What is the significance of the key prop in React lists?",
          "Ans": "The key prop is used to uniquely identify elements in a list, which helps React efficiently update and reconcile the virtual DOM."
        },
        {
          "Qno": 80,
          "Ques": "What is a higher-order component (HOC) in React?",
          "Ans": "A higher-order component (HOC) is a function that takes a component and returns a new component with additional props or functionality."
        },
        {
          "Qno": 81,
          "Ques": "What is the purpose of the shouldComponentUpdate method in React?",
          "Ans": "shouldComponentUpdate is a lifecycle method in class components that determines whether a component should re-render based on state or props changes."
        },
        {
          "Qno": 82,
          "Ques": "What is React.memo?",
          "Ans": "React.memo is a higher-order component that prevents re-rendering of a functional component when its props have not changed."
        },
        {
          "Qno": 83,
          "Ques": "What are React fragments?",
          "Ans": "React fragments are used to group multiple elements without adding an extra node to the DOM. You can use <></> syntax for a shorthand."
        },
        {
          "Qno": 84,
          "Ques": "What is the useLayoutEffect hook in React?",
          "Ans": "The useLayoutEffect hook is similar to useEffect but runs synchronously after the DOM mutations, useful for reading layout or triggering DOM updates."
        },
        {
          "Qno": 85,
          "Ques": "What are error boundaries in React?",
          "Ans": "Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log the errors, and display a fallback UI."
        },
        {
          "Qno": 86,
          "Ques": "How do you implement conditional rendering in React?",
          "Ans": "Conditional rendering in React can be done using JavaScript operators like if, ternary operator, or logical && to decide what JSX to render based on certain conditions."
        },
        {
          "Qno": 87,
          "Ques": "What are synthetic events in React?",
          "Ans": "Synthetic events are React's cross-browser wrapper around the browser's native events, ensuring that events behave consistently across browsers."
        },
        {
          "Qno": 88,
          "Ques": "What is React's Virtual DOM?",
          "Ans": "The Virtual DOM is a lightweight representation of the actual DOM. React uses it to optimize DOM updates by performing a diffing algorithm and updating only changed elements."
        },
        {
          "Qno": 89,
          "Ques": "What is a useReducer hook in React?",
          "Ans": "The useReducer hook is an alternative to useState, used for managing more complex state logic with actions and dispatchers, often used in large-scale apps."
        },
        {
          "Qno": 90,
          "Ques": "What is the purpose of the componentDidMount lifecycle method?",
          "Ans": "componentDidMount is called once a component has been mounted to the DOM, and is typically used for fetching data or triggering side effects."
        },
        {
          "Qno": 91,
          "Ques": "What are the two types of props in React?",
          "Ans": "Props can be categorized into two types: 'read-only' props, passed down from parent components, and 'callback' props, which are functions passed to child components for interaction."
        },
        {
          "Qno": 92,
          "Ques": "What is the purpose of the componentWillUnmount lifecycle method?",
          "Ans": "componentWillUnmount is called before a component is removed from the DOM. It is typically used for cleanup tasks like cancelling network requests or removing event listeners."
        },
        {
          "Qno": 93,
          "Ques": "What is React Strict Mode?",
          "Ans": "React Strict Mode is a development tool that helps identify potential problems in an app, such as unsafe lifecycles or deprecated APIs."
        },
        {
          "Qno": 94,
          "Ques": "How do you pass a function as a prop in React?",
          "Ans": "You pass a function as a prop by defining the function in the parent component and then passing it like any other prop: <ChildComponent functionName={handleFunction} />."
        },
        {
          "Qno": 95,
          "Ques": "What are custom hooks in React?",
          "Ans": "Custom hooks are user-defined functions that allow you to extract and reuse stateful logic between components, enabling better code reusability."
        },
        {
          "Qno": 96,
          "Ques": "What is React DevTools?",
          "Ans": "React DevTools is a browser extension that helps developers inspect and debug React component trees, states, and props in real-time."
        },
        {
          "Qno": 97,
          "Ques": "What is the difference between useEffect and useLayoutEffect?",
          "Ans": "useEffect runs asynchronously after the render, while useLayoutEffect runs synchronously before the browser paints, making it useful for reading layout and making changes before visual updates."
        },
        {
          "Qno": 98,
          "Ques": "What is the purpose of the key prop in React lists?",
          "Ans": "The key prop is used to uniquely identify elements in a list, which helps React efficiently update and reconcile the virtual DOM."
        },
        {
          "Qno": 99,
          "Ques": "How does React handle re-rendering?",
          "Ans": "React re-renders a component when its state or props change. React uses a virtual DOM to efficiently update only the parts of the UI that have changed."
        },
        {
          "Qno": 100,
          "Ques": "What is the difference between props and state?",
          "Ans": "Props are immutable and passed from parent to child components, whereas state is mutable and managed within the component itself."
        },
          {
            "Qno": 101,
            "Ques": "What is the difference between controlled and uncontrolled components?",
            "Ans": "Controlled components are form elements whose values are controlled by React state, while uncontrolled components maintain their own internal state."
          },
          {
            "Qno": 102,
            "Ques": "What is React's Virtual DOM?",
            "Ans": "The Virtual DOM is a lightweight representation of the actual DOM. React uses it to optimize DOM updates by performing a diffing algorithm and updating only changed elements."
          },
          {
            "Qno": 103,
            "Ques": "What is the significance of React keys in lists?",
            "Ans": "React keys help React identify which items have changed, are added, or are removed, improving performance by optimizing re-rendering in lists."
          },
          {
            "Qno": 104,
            "Ques": "How do you perform conditional rendering in React?",
            "Ans": "Conditional rendering in React can be done using JavaScript operators like if, ternary operator, or logical && to decide what JSX to render based on conditions."
          },
          {
            "Qno": 105,
            "Ques": "What is the purpose of React hooks?",
            "Ans": "React hooks allow you to use state and other React features in functional components, eliminating the need for class components."
          },
          {
            "Qno": 106,
            "Ques": "What is useEffect and how is it different from componentDidMount?",
            "Ans": "useEffect is a hook for performing side effects in functional components. Unlike componentDidMount, useEffect runs after every render, unless you specify dependencies."
          },
          {
            "Qno": 107,
            "Ques": "What is useLayoutEffect?",
            "Ans": "useLayoutEffect is similar to useEffect but it fires synchronously after the DOM is updated, which is useful for reading and manipulating the layout."
          },
          {
            "Qno": 108,
            "Ques": "What is a higher-order component (HOC) in React?",
            "Ans": "A higher-order component (HOC) is a function that takes a component and returns a new component with additional props or functionality."
          },
          {
            "Qno": 109,
            "Ques": "What is React.memo?",
            "Ans": "React.memo is a higher-order component used to memoize functional components, preventing unnecessary re-renders when the props have not changed."
          },
          {
            "Qno": 110,
            "Ques": "What is React's Context API used for?",
            "Ans": "React's Context API is used for sharing data across the component tree without passing props down manually at every level."
          },
          {
            "Qno": 111,
            "Ques": "How do you create a context in React?",
            "Ans": "To create a context, use React.createContext() which returns a Context object with a Provider and Consumer component."
          },
          {
            "Qno": 112,
            "Ques": "What is useContext in React?",
            "Ans": "useContext is a hook that allows you to consume values from a context directly inside functional components."
          },
          {
            "Qno": 113,
            "Ques": "What is the purpose of the useReducer hook?",
            "Ans": "The useReducer hook is used for managing complex state logic with actions and dispatchers, often used in larger applications where useState becomes cumbersome."
          },
          {
            "Qno": 114,
            "Ques": "What is a React fragment?",
            "Ans": "A React fragment allows you to group a list of children without adding extra nodes to the DOM. You can use <></> as shorthand."
          },
          {
            "Qno": 115,
            "Ques": "What is an error boundary in React?",
            "Ans": "An error boundary is a component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI."
          },
          {
            "Qno": 116,
            "Ques": "What is the significance of useRef in React?",
            "Ans": "useRef is a hook that returns a mutable object which can hold a reference to a DOM element or a value across renders without causing a re-render."
          },
          {
            "Qno": 117,
            "Ques": "What is the difference between useEffect and useLayoutEffect?",
            "Ans": "useEffect runs asynchronously after the render is complete, while useLayoutEffect runs synchronously after the DOM mutations but before the browser has painted."
          },
          {
            "Qno": 118,
            "Ques": "What is useCallback in React?",
            "Ans": "useCallback is a hook that memoizes a function so that it doesn’t get redefined on every render, improving performance when passed as props."
          },
          {
            "Qno": 119,
            "Ques": "What is the purpose of the shouldComponentUpdate lifecycle method?",
            "Ans": "shouldComponentUpdate is used to control whether a component re-renders or not when there is a change in props or state."
          },
          {
            "Qno": 120,
            "Ques": "What is the purpose of the componentDidMount lifecycle method?",
            "Ans": "componentDidMount is called once after a component has been mounted to the DOM. It is used for tasks like fetching data or adding event listeners."
          },
          {
            "Qno": 121,
            "Ques": "What are refs in React?",
            "Ans": "Refs are a way to access DOM elements or component instances directly, often used for managing focus, text selection, or triggering imperative animations."
          },
          {
            "Qno": 122,
            "Ques": "What is React Strict Mode?",
            "Ans": "React Strict Mode is a development tool that helps identify potential problems in an app, like unsafe lifecycle methods and deprecated API usage."
          },
          {
            "Qno": 123,
            "Ques": "How do you optimize performance in React?",
            "Ans": "Performance can be optimized by using React.memo, useMemo, useCallback, avoiding unnecessary re-renders, and lazy loading components when needed."
          },
          {
            "Qno": 124,
            "Ques": "What is lazy loading in React?",
            "Ans": "Lazy loading in React allows you to load components only when they are needed, improving the initial load time of the application."
          },
          {
            "Qno": 125,
            "Ques": "What is Suspense in React?",
            "Ans": "Suspense is a React feature that allows you to delay the rendering of certain components until some asynchronous task, like data fetching, is completed."
          },
          {
            "Qno": 126,
            "Ques": "What are higher-order components (HOCs) in React?",
            "Ans": "Higher-order components (HOCs) are functions that take a component and return a new component with additional props or functionality."
          },
          {
            "Qno": 127,
            "Ques": "What are synthetic events in React?",
            "Ans": "Synthetic events are React's cross-browser wrapper around the browser's native events, ensuring that events behave consistently across different browsers."
          },
          {
            "Qno": 128,
            "Ques": "What is the purpose of the componentWillUnmount lifecycle method?",
            "Ans": "componentWillUnmount is called before a component is removed from the DOM and is typically used for cleanup tasks like cancelling network requests or removing event listeners."
          },
          {
            "Qno": 129,
            "Ques": "What is the difference between state and props in React?",
            "Ans": "Props are passed from parent to child components and are immutable, while state is managed within the component itself and can be changed using setState."
          },
          {
            "Qno": 130,
            "Ques": "What is the purpose of the componentWillUpdate lifecycle method?",
            "Ans": "componentWillUpdate is called before the component re-renders, allowing you to perform preparations before a re-render happens."
          },
          {
            "Qno": 131,
            "Ques": "How do you handle events in React?",
            "Ans": "You handle events in React by attaching event handlers to elements, which are passed as camelCase props, e.g., onClick or onChange."
          },
          {
            "Qno": 132,
            "Ques": "How do you pass a function as a prop in React?",
            "Ans": "You pass a function as a prop by defining the function in the parent component and then passing it like any other prop: <ChildComponent functionName={handleFunction} />."
          },
          {
            "Qno": 133,
            "Ques": "What are the two types of forms in React?",
            "Ans": "Forms in React are either controlled components, where React manages the state, or uncontrolled components, where the DOM manages the form elements' state."
          },
          {
            "Qno": 134,
            "Ques": "What is a callback function in React?",
            "Ans": "A callback function in React is a function passed as a prop to a child component that is called from the child to communicate or trigger actions in the parent component."
          },
          {
            "Qno": 135,
            "Ques": "What is the use of the key prop in React?",
            "Ans": "The key prop is used to help React identify which items in a list have changed, allowing React to optimize re-rendering and improve performance."
          },
          {
            "Qno": 136,
            "Ques": "How do you update an array state in React?",
            "Ans": "To update an array in state, use the spread operator or array methods like map, filter, or concat to create a new array and set the new array with the setter function."
          },
          {
            "Qno": 137,
            "Ques": "What is component composition in React?",
            "Ans": "Component composition is the technique of combining multiple components to create more complex UIs. React encourages using small, reusable components to build larger UIs."
          },
          {
            "Qno": 138,
            "Ques": "What are defaultProps in React?",
            "Ans": "defaultProps are a way to set default values for props in React, in case a parent component does not provide a value for the prop."
          },
          {
            "Qno": 139,
            "Ques": "What is the purpose of the setState function in React?",
            "Ans": "setState is used to update the state of a component and trigger a re-render. It is an asynchronous operation in class components."
          },
          {
            "Qno": 140,
            "Ques": "What is the purpose of the React.Fragment?",
            "Ans": "React.Fragment is used to wrap multiple child elements without adding an extra node to the DOM, keeping the DOM structure clean."
          },
            {
              "Qno": 141,
              "Ques": "What are the benefits of using TypeScript with React?",
              "Ans": "TypeScript provides static type checking, improved editor support, and better error handling, making the development process more robust and reducing runtime errors."
            },
            {
              "Qno": 142,
              "Ques": "What is React.lazy and how does it work?",
              "Ans": "React.lazy is a function that enables dynamic import of components, allowing for code-splitting and reducing the initial bundle size by loading components only when needed."
            },
            {
              "Qno": 143,
              "Ques": "What is a class component in React?",
              "Ans": "A class component is a traditional way of defining components in React using ES6 class syntax. They can have state, lifecycle methods, and render methods."
            },
            {
              "Qno": 144,
              "Ques": "What is a functional component in React?",
              "Ans": "A functional component is a simpler way to define components in React using a JavaScript function. They can accept props and return JSX."
            },
            {
              "Qno": 145,
              "Ques": "What is the difference between a class component and a functional component?",
              "Ans": "Class components use ES6 class syntax, have lifecycle methods, and can hold state. Functional components are simpler, stateless (unless using hooks), and have no lifecycle methods."
            },
            {
              "Qno": 146,
              "Ques": "What is the significance of the return statement in a functional component?",
              "Ans": "In a functional component, the return statement defines the JSX that will be rendered to the DOM. It must return a valid JSX element or null."
            },
            {
              "Qno": 147,
              "Ques": "What is JSX in React?",
              "Ans": "JSX is a syntax extension for JavaScript that allows writing HTML-like code in JavaScript. It is used to describe what the UI should look like in React components."
            },
            {
              "Qno": 148,
              "Ques": "How does React handle events?",
              "Ans": "React handles events by using a synthetic event system, which normalizes events across browsers. React events are passed as props to elements in camelCase syntax."
            },
            {
              "Qno": 149,
              "Ques": "What is the purpose of the useEffect hook?",
              "Ans": "The useEffect hook in React is used to handle side effects in functional components. It can perform tasks like data fetching, subscriptions, and manually changing the DOM."
            },
            {
              "Qno": 150,
              "Ques": "What is the difference between props and state?",
              "Ans": "Props are immutable values passed from parent to child components, while state is a mutable value used to manage data that can change over time within a component."
            },
            {
              "Qno": 151,
              "Ques": "What are synthetic events in React?",
              "Ans": "Synthetic events are React's normalized wrapper around the browser's native events. They ensure consistent behavior across different browsers and provide additional functionality."
            },
            {
              "Qno": 152,
              "Ques": "What is the significance of the 'key' prop in React?",
              "Ans": "The 'key' prop is used to identify elements in a list to help React efficiently update the DOM when items are added, removed, or reordered."
            },
            {
              "Qno": 153,
              "Ques": "What is the React Router?",
              "Ans": "React Router is a library for handling navigation in a React application. It allows you to define routes and link to different views based on the URL."
            },
            {
              "Qno": 154,
              "Ques": "What is the difference between <Route> and <Link> in React Router?",
              "Ans": "<Route> defines the mapping between a URL and a component, while <Link> is used to navigate to different routes without reloading the page."
            },
            {
              "Qno": 155,
              "Ques": "What is the use of React's Context API?",
              "Ans": "The Context API allows you to share values like state or functions across components without having to pass props manually through each level of the component tree."
            },
            {
              "Qno": 156,
              "Ques": "How do you trigger a re-render in a React component?",
              "Ans": "You can trigger a re-render by changing the state with the setState function in class components or by updating state using the useState hook in functional components."
            },
            {
              "Qno": 157,
              "Ques": "What are hooks in React?",
              "Ans": "Hooks are functions in React that allow you to use state and other React features in functional components, such as useState, useEffect, and useContext."
            },
            {
              "Qno": 158,
              "Ques": "What is useEffect with an empty dependency array?",
              "Ans": "useEffect with an empty dependency array [] runs only once after the initial render, simulating componentDidMount in class components."
            },
            {
              "Qno": 159,
              "Ques": "What is useState in React?",
              "Ans": "useState is a hook that allows you to add state to functional components. It returns an array with the current state value and a function to update it."
            },
            {
              "Qno": 160,
              "Ques": "What is a memoized function in React?",
              "Ans": "A memoized function in React is one that remembers its previous result and skips recalculating if the inputs (props or state) haven’t changed, which optimizes performance."
            },
            {
              "Qno": 161,
              "Ques": "What is React's reconciliation algorithm?",
              "Ans": "React's reconciliation algorithm compares the previous and current state of the virtual DOM to determine the most efficient way to update the actual DOM."
            },
            {
              "Qno": 162,
              "Ques": "What is the purpose of React's PropTypes?",
              "Ans": "PropTypes is a runtime type-checking library for React props. It helps ensure that components receive the correct type of props and provides warnings in development mode."
            },
            {
              "Qno": 163,
              "Ques": "How do you share data between sibling components in React?",
              "Ans": "To share data between sibling components, you can lift the state up to the nearest common ancestor and pass the data as props to each sibling component."
            },
            {
              "Qno": 164,
              "Ques": "What is useReducer used for in React?",
              "Ans": "useReducer is a React hook used for managing complex state logic in functional components. It is often used when state transitions depend on previous state or multiple actions."
            },
            {
              "Qno": 165,
              "Ques": "What is componentDidUpdate lifecycle method?",
              "Ans": "componentDidUpdate is a lifecycle method in class components that is called after the component updates due to changes in props or state."
            },
            {
              "Qno": 166,
              "Ques": "What are refs used for in React?",
              "Ans": "Refs are used to directly access a DOM element or a component instance, allowing you to perform operations like focusing an input field or triggering animations."
            },
            {
              "Qno": 167,
              "Ques": "What is the purpose of the static getDerivedStateFromProps method?",
              "Ans": "getDerivedStateFromProps is a static method that is called right before rendering. It allows a component to update its state based on changes in props."
            },
            {
              "Qno": 168,
              "Ques": "What is the purpose of the contextType property in React?",
              "Ans": "contextType is used to assign a context to a class component, allowing it to access the context value via this.context."
            },
            {
              "Qno": 169,
              "Ques": "What is the difference between server-side rendering (SSR) and client-side rendering (CSR)?",
              "Ans": "In server-side rendering (SSR), the HTML is generated on the server and sent to the client, while in client-side rendering (CSR), the browser fetches JavaScript and renders the HTML on the client-side."
            },
            {
              "Qno": 170,
              "Ques": "What is code splitting in React?",
              "Ans": "Code splitting is a technique used in React to break the codebase into smaller chunks that can be loaded on demand, improving the app's performance by reducing initial load time."
            }, 
  ]

  return (
    <div className="container" id='questions'>
    <h1>React Interview Questions</h1>
    <div className="questions-wrapper">
      {questions.map((item, index) => (
        <div key={index} className="question-box">
              <h4 style={{ color: "#007bff", fontWeight: "bold" }}>{index + 1}. {item.Ques}</h4>
          <h5>{item.Ans}</h5>
          {item.image && <img src={item.image} alt={`Image for ${item.question}`} className="question-image" />}
        </div>
      ))}
    </div>
    <ScrollButton/>
  </div>
  )
}

export default ReactQuestion;

