// DOM tree traversal

// const rootNode = document.getRootNode(); // document
// const htmlElementNode = rootNode.childNodes[0]; // 1st Node of the Nodelist
// console.log(htmlElementNode.childNodes); // NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.childNodes);

// sibling relation  - explore - refer video

// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const body = document.body
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const head = document.querySelector("head");
// console.log(head);
// const title = head.querySelector("title");
// console.log(title.childNodes);

const container = document.querySelector(".container");
console.log(container.children); // ignores texts

// Refer dom tree image in the video ppt.