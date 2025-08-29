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

**Ans: <div id="container"><p id="text">Click me!</p></div>**
**When you click on the <p> element, the following happens:The click event is triggered on the innermost element, the <p id="text">.The event then "bubbles up" to its immediate parent, the <div id="container">.
From there, it continues to bubble up to the next parent element, and so on, until it reaches the highest level of the DOM.**



## What is Event Delegation in JavaScript? Why is it useful?








## What is Event Delegation in JavaScript? Why is it useful?

