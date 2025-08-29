## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### getElementById:

**Ans: getElementById select the one Element which is give a id in a Html document .**

### getElementsByClassName:

**Ans: Select the all element that have spacific class name**

### querySelector:
 
**Ans: Selects the first element that matches a given CSS selector (e.g., #myID, .myClass, div p,)**

### querySelectorAll:

**Ans: Selects all elements that match a given CSS selector.**


----------------------------------------------------------------------------------------------------------



## How do you create and insert a new element into the DOM?


**Ans: Use the document createElement() method to create a new HTML element node.then append this node in the parent node  by using appendChild() method**

----------------------------------------------------------------------------------------------------------


## What is Event Bubbling and how does it work?



**Ans:Event bubbling is a term in the dom where the event an element receives is bubbled to it's parent.**

### How does it work?

Ans: "<div id="container"><p id="text">Click me!</p></div>"
**When you click on the "p" element, the following happens:The click event is triggered on the innermost element, the "p".The event then "bubbles up" to its immediate parent, the "div"
From there, it continues to bubble up to the next parent element, and so on, until it reaches the highest level of the DOM.**

----------------------------------------------------------------------------------------------------------

## What is Event Delegation in JavaScript? Why is it useful?

**Ans:Event delegation is a technique in JavaScript where you add a single event listener to a parent element instead of adding separate listeners to multiple child elements. When an event (like a click) occurs on a child element, it bubbles up the DOM tree to the parent. The single listener on the parent then catches the event and can identify which child it originated from**




----------------------------------------------------------------------------------------------------------

## What is the difference between preventDefault() and stopPropagation() methods?

**Ans: preventDefault() is about preventing the browser's default action.**
**stopPropagation() is about stopping the event from propagating through the DOM. this are two major differnt about preventDefault() and stopPropagation()**
