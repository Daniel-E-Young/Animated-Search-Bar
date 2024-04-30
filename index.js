const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListene("click", () => {
  searchBarContainerEl.classList.toggle("active");
});


