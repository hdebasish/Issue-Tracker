let labelListElement = document.getElementById("label_list_wrapper-id");
let inputFieldElement = document.getElementById("label");
let labelNameElement = document.getElementsByClassName("label-name");
let addLabelElement = document.getElementById("add_label_id");
let labelListItemElement = document.getElementsByClassName("label_list_item");
let insertLabelElement = document.getElementById("added_labels-id");
let form = document.getElementById("create-issue-Form");

for (var i = 0; i < labelListItemElement.length; i++) {
  labelListItemElement[i].addEventListener("click", addLabel, false);
}

function addLabel(e) {
  if (document.getElementsByClassName("label_item_added").length > 9) {
    return;
  }

  let div = document.createElement("div");
  div.classList.add("label_item_added");
  div.innerHTML = `<span>${this.children[1].innerText}</span> <input class="hide" type="checkbox" name="labels" value="${this.children[1].innerText}" checked/>`;
  insertLabelElement.appendChild(div);

  this.remove();

  labelListElement.classList.add("hide");

  if (document.getElementsByClassName("label_item_added").length > 9) {
    inputFieldElement.classList.add("hide");
  }
}

function addInputLabel() {
  if (document.getElementById("label-text").innerText == "") {
    return;
  }

  if (document.getElementsByClassName("label_item_added").length > 9) {
    return;
  }

  for (
    var i = 0;
    i < document.getElementsByClassName("label_item_added").length;
    i++
  ) {

    if (
      document
        .getElementsByClassName("label_item_added")
        [i].children[0].innerText.toLowerCase() ==
      inputFieldElement.value.toLowerCase()
    ) {
      return;
    }
  }

  let div = document.createElement("div");
  div.classList.add("label_item_added");
  div.innerHTML = `<span>${inputFieldElement.value}</span> <input class="hide" type="checkbox" name="labels" value="${inputFieldElement.value}" checked/>`;
  inputFieldElement.value = "";
  document.getElementById("label-text").innerText = "";
  addLabelElement.style.display = "none";
  insertLabelElement.appendChild(div);

  labelListElement.classList.add("hide");

  if (document.getElementsByClassName("label_item_added").length > 9) {
    inputFieldElement.classList.add("hide");
  }
}

inputFieldElement.addEventListener("keyup", (e) => {
  labelListElement.classList.remove("hide");

  let searchLabelText = inputFieldElement.value;

  for (let i = 0; i < labelNameElement.length; i++) {

    if (
      !labelNameElement[i].innerText
        .toLowerCase()
        .includes(searchLabelText.toLowerCase())
    ) {
      labelNameElement[i].parentElement.style.display = "none";
    } else {
      labelNameElement[i].parentElement.style.display = "flex";
    }
  }

  let listItems = document.querySelectorAll(
    '.label_list_item[style="display: flex;"]'
  );


  if (listItems.length === 0 && inputFieldElement.value.length > 1) {
    if (document.getElementsByClassName("label_item_added").length > 0) {
      for (
        var i = 0;
        i < document.getElementsByClassName("label_item_added").length;
        i++
      ) {
        if (
          document
            .getElementsByClassName("label_item_added")
            [i].children[0].innerText.toLowerCase() ==
          inputFieldElement.value.toLowerCase()
        ) {
          addLabelElement.style.display = "none";
          break;
        } else {
          addLabelElement.style.display = "flex";
          document.getElementById("label-text").innerText = searchLabelText;
        }
      }
    } else {
      addLabelElement.style.display = "flex";
      document.getElementById("label-text").innerText = searchLabelText;
    }
  } else {
    addLabelElement.style.display = "none";
    document.getElementById("label-text").innerText = "";
  }
});

document.getElementById("label").addEventListener("click", (e) => {
  labelListElement.classList.remove("hide");
});

document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".label_list_wrapper-id") &&
    !e.target.closest("#label")
  ) {
    labelListElement.classList.add("hide");
  }
});

function resetForm() {
  let labels = document.querySelectorAll(".label_item_added");
  labels.forEach((label) => {
    label.remove();
  });
  inputFieldElement.classList.remove("hide");
  form.reset();
}


