document.addEventListener("DOMContentLoaded", () => {
  console.log("JS Loaded")

  const form = document.querySelector("#new-form");
  form.addEventListener("submit", handleFormSubmit);
});

