postButton = document.getElementById("post-button");
inputBox = document.getElementById("input-box");

// postButton.onclick = function() {
//     let post = inputBox.value; // get comment content from input box
//     let li = document.createElement("li"); // create an empty li element
//     li.innerHTML = post; // set the li element's content to the comment from input box
//     document.getElementById("chat-list").appendChild(li); // add this li element to the comment list
//     inputBox.value = ""; // clear the input box
// }

postButton.onclick = function() {
    let post = inputBox.value;
    if (post != "") {
        let time = new Date();
        let timeStr = `${time.getFullYear()}/${time.getMonth()+1}/${time.getDate()}`;

        let container = document.createElement("li");
        let postContainer = document.createElement("p");
        postContainer.innerText = post;
        let timeContainer = document.createElement("p");
        timeContainer.innerText = timeStr;
        container.appendChild(postContainer);
        container.appendChild(timeContainer);
        document.getElementById("chat-list").appendChild(container);
        inputBox.value = "";

        let event = new Event("input");
        inputBox.dispatchEvent(event);
    }
}

inputBox.addEventListener("input", function() {
    if (inputBox.value === "") {
        postButton.disabled = true;
        postButton.classList.add("cursor-disabled");
    } else {
        postButton.disabled = false;
        postButton.classList.remove("cursor-disabled");
    }
});