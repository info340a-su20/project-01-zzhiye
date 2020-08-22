'use strict';

let state = {
  suggestionList: [
    {id:1, description:'Add more food banks', complete:false},
  ],
  inputtedText: ''
};

function createSugguestionItemElement(suggestion) {
  let list = document.createElement("li");
  list.textContent = suggestion.description;
  if (suggestion.complete) {
    list.classList.add("font-strike");
  }
  list.addEventListener("click", function() {
    list.classList.toggle("font-strike");
  })
  return list;
}

renderSuggestionList(state.suggestionList);

function renderSuggestionList(suggestionList) {
  let orderList = document.querySelector("ol");
  orderList.innerHTML = "";
  for (let i=0; i<suggestionList.length; i++) {
    orderList.appendChild(createSugguestionItemElement(suggestionList[i]));
  }
  renderInput();
}

renderSuggestionList(state.suggestionList);

function addNewSuggestion() {
  state.suggestionList.push({id:state.suggestionList + 1, description:state.inputtedText, complete:false});
  state.inputtedText = "";
  renderSuggestionList(state.suggestionList);
}

let input = document.querySelector("input");

input.addEventListener("input", function() {
  state.inputtedText = input.value;
  renderInput();
});

let addTask = document.querySelector("#add-task");

addTask.addEventListener("click", addNewSuggestion);

function renderInput() {
  document.querySelector("input").value = state.inputtedText;
  if (state.inputtedText == "") {
    document.querySelector("button").disabled = true;
  } else {
    document.querySelector("button").disabled = false;
  }
}
