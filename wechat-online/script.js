document.getElementById("post-button").onclick = function() {
    let post = document.getElementById("input-box").value; // get comment content from input box
    let li = document.createElement("li"); // create an empty li element
    li.innerHTML = post; // set the li element's content to the comment from input box
    document.getElementById("chat-list").appendChild(li); // add this li element to the comment list
    document.getElementById("input-box").value = ""; // clear the input box
}