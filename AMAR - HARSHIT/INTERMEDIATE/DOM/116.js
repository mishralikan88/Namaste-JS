// clone nodes

// 1. Select the unordered list (ul) with class "todo-list" from the document.
const ul = document.querySelector(".todo-list");

// 2. Create a new list item (li) element. This creates an empty <li></li> element.
const li = document.createElement("li");

// 3. Set the text content of the new <li> element to "new todo".
//    After this line, the li element becomes: <li>new todo</li>.
li.textContent = "new todo";

// 4. Clone the <li> element using the cloneNode(true) method.
//    - true: This means a "deep copy" is made. It copies the element and all its children (if any).
//    - If it was false, only the element itself would be cloned, not its children.
//    - Since li has only text content (no children elements), li2 will be an exact copy of li.
//    After this line, li2 is: <li>new todo</li>.
const li2 = li.cloneNode(true);

// 5. Log the cloned <li> (li2) to the console.
//    Output: <li>new todo</li> (a clone of the original li element).
console.log(li2);

// 6. Append the original <li> to the ul element (todo list).
//    - append() adds the element as the last child.
//    - After this line, the <ul> will have this structure:
//    <ul class="todo-list">
//      <li>new todo</li> <!-- original li element -->
//    </ul>
ul.append(li);

// 7. Prepend the cloned <li> (li2) to the ul element.
//    - prepend() adds the element as the first child.
//    - Since there is already a <li> from the append() step, li2 is added before it.
//    - After this line, the <ul> will have this structure:
//    <ul class="todo-list">
//      <li>new todo</li> <!-- cloned li2 element (prepended) -->
//      <li>new todo</li> <!-- original li element (appended) -->
//    </ul>
ul.prepend(li2);


// Key Points about cloneNode() -

// Deep copy (true): Copies the element and its content (like text or child elements). In this case, the text "new todo" is copied as well.

// Shallow copy (false): Only the element itself is cloned, without any of its children or text content.
