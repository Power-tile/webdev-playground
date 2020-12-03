document.getElementById("post-button").onclick = function() {
    post = document.getElementById("input-box").value;
    let li = document.createElement("li");
    li.innerHTML = post;
    document.getElementById("chat-list").appendChild(li);
    post = document.getElementById("input-box").value = "";
}