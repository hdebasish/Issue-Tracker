let labelDiv = document.getElementById("labels-id");
let labelIcon = document.getElementById("label-arrow");

let authorDiv = document.getElementById("authors-id");
let authorIcon = document.getElementById("author-arrow");

let searchIssueElement = document.getElementById("searchInput");

let isOpenLabel = false;
let isOpenAuthor = false;

function showLabels() {
  if (isOpenLabel) {
    labelIcon.style.transform = "rotate(0deg)";
    labelDiv.style.display = "none";
    isOpenLabel = false;
  } else {
    labelIcon.style.transform = "rotate(180deg)";
    labelDiv.style.display = "flex";
    isOpenLabel = true;
  }
}

function showAuthors() {
  if (isOpenAuthor) {
    authorIcon.style.transform = "rotate(0deg)";
    authorDiv.style.display = "none";
    isOpenAuthor = false;
  } else {
    authorIcon.style.transform = "rotate(180deg)";
    authorDiv.style.display = "flex";
    isOpenAuthor = true;
  }
}

searchIssueElement.addEventListener("keyup", () => {
  const value = searchIssueElement.value.trim().toLowerCase();
  const title = document.querySelectorAll(".title-col");
  const description = document.querySelectorAll(".desc-col");

  for (let i = 0; i < title.length; i++) {
    if (title[i].innerText.toLowerCase().includes(value)) {
      title[i].parentElement.style.display = "";
    } else if (description[i].innerText.toLowerCase().includes(value)) {
      description[i].parentElement.style.display = "";
    } else {
      title[i].parentElement.style.display = "none";
      description[i].parentElement.style.display = "none";
    }
  }
});

function filterAuthors() {
  authorIcon.style.transform = "rotate(0deg)";
  authorDiv.style.display = "none";
  isOpenAuthor = false;

  const values = document.getElementsByClassName("authors-info-check");

  let filteredAuthors = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i].checked) {
      filteredAuthors.push(values[i].getAttribute("name").toLowerCase());
    }
  }

  const authors = document.getElementsByClassName("author-col");

  for (let i = 0; i < authors.length; i++) {
    if (filteredAuthors.includes(authors[i].innerText.toLowerCase())) {
      authors[i].parentElement.style.display = "";
    } else {
      authors[i].parentElement.style.display = "none";
    }
  }
}

function filterLabels() {
  labelIcon.style.transform = "rotate(0deg)";
  labelDiv.style.display = "none";
  isOpenLabel = false;

  const values = document.getElementsByClassName("labels-info-check");

  let filteredLabels = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i].checked) {
      filteredLabels.push(values[i].getAttribute("name").toLowerCase());
    }
  }

  const labels = document.getElementsByClassName("label-col");

  for (let i = 0; i < labels.length; i++) {
    let currentLabel = labels[i].querySelectorAll(".label-item-capsule");

    let count = 0;

    for (let j = 0; j < currentLabel.length; j++) {
      if (filteredLabels.includes(currentLabel[j].innerText.toLowerCase())) {
        count++;
        labels[i].parentElement.style.display = "";
        break;
      }
    }

    if (count == 0) {
      labels[i].parentElement.style.display = "none";
    }
  }
}
