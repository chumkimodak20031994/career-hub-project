import React from 'react';

const Intrview = () => {
    return (
        <div className='text-center m-6 bg-yellow-50'>
            <h1 className='font-semibold text-5xl p-4'>question answer</h1>
    <h1 className='font-bold text-xl p-2'>1.what should i use context api?</h1> 
    <p>ans:-Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components.</p>   
    <h1 className='font-bold text-xl p-2'>2.what is custom hook?</h1>
    <p>ans:-When we want to share logic between two JavaScript functions, we extract it to a third function. Both components and Hooks are functions, so this works for them too!A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.</p>
    <h1 className='font-bold text-xl p-2'>3.what is work useref?</h1>
    <p>ans:-It can be used to access a DOM element directly.But there are some instances where useRef can be used without causing issues.
In React, we can add a ref attribute to an element to access it directly in the DOM.This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.
In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.</p>
<h1 className='font-bold text-xl p-2'>4.what is work useMemo?</h1>
<p>ans:-useMemo is a React Hook that lets you cache the result of a calculation between re-renders.example:const cachedValue = useMemo(calculateValue, dependencies)</p>
        </div>
    );
};

export default Intrview;