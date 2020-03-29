document.addEventListener('DOMContentLoaded', () => {
  console.log("JS Loaded");

  const form = document.querySelector("#new-form");
  form.addEventListener("submit", handleFormSubmit);
  
  const deleteAll = document.querySelector("#delete-button");
  deleteAll.addEventListener("click", handleDeleteButton);
});

const handleFormSubmit = function (event) {
  event.preventDefault();
  const newListItem = createNewListItem(event.target);
  const list = document.querySelector('#main-list');
  list.appendChild(newListItem);
};

const createNewListItem = function (form) {
  const gameListItem = document.createElement('ul');
  gameListItem.classList.add('game-list-item');

  const title = document.createElement('h1');
  title.textContent = form.title.value;
  gameListItem.appendChild(title);

  const rating = document.createElement('h2');
  if (!form.rating.value) {
    rating.textContent = "Rating - Undecided";
  } else {
    rating.textContent = `Rating - ${form.rating.value}`;
  };
  gameListItem.appendChild(rating);

  const minPlayers = document.createElement('h3');
  minPlayers.textContent = `Min Players: ${form.minPlayers.value}`;
  gameListItem.appendChild(minPlayers);

  const maxPlayers = document.createElement('h3');
  maxPlayers.textContent = `Max Players: ${form.maxPlayers.value}`;
  gameListItem.appendChild(maxPlayers);

  const plays = document.createElement('h3');
  plays.textContent = `Plays: ${form.plays.value}`;
  gameListItem.appendChild(plays);

  return gameListItem;
};

const handleDeleteButton = () => {
  const list = document.querySelector('#main-list');
  let child = list.lastElementChild;
  while (child) {
    list.removeChild(child);
    child = list.lastElementChild;
  };
};