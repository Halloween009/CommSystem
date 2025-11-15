const inputText = document.querySelector(".inputText");
const sendBtn = document.querySelector(".sendBtn");
const commentList = document.querySelector(".commList");

function saveComments() {
  const comments = [];
  commentList.querySelectorAll("li").forEach((comment) => {
    comments.push(comment.childNodes[0].textContent);
  });
  localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments() {
  const comments = JSON.parse(localStorage.getItem("comments"));
  comments.forEach((comment) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.classList.add("deleteBtn");
    li.textContent = comment;
    li.appendChild(deleteBtn);
    commentList.appendChild(li);
  });
}

sendBtn.addEventListener("click", (e) => {
  const text = inputText.value.trim();
  if (text) {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.classList.add("deleteBtn");
    li.textContent = text;
    commentList.appendChild(li);
    li.appendChild(deleteBtn);
    inputText.value = "";
    saveComments();
  }
});

window.addEventListener("load", loadComments());

commentList.addEventListener(
  "click",
  (e) => {
    if (e.target.classList.contains("deleteBtn")) {
      e.target.closest("li").remove();
      saveComments();
    }
  },
  true
);
