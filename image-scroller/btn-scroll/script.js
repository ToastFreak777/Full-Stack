import background from "../wallpapers.json" assert { type: "json" };
const { wallpapers } = background;
// Offset for pagination
const offset = wallpapers.length;
// DOM elements
const bg = document.querySelector("#bg");
const img = document.querySelector("#container-img");
const pagesContainer = document.querySelector(".pages");

// Initial values
const pagination = {
  limit: 5,
  count: Math.ceil(wallpapers.length / 5),
  page: 0,
  pageList: [],
  item: null,
  index: 0,
};

bg.src = wallpapers[pagination.page].url;
img.src = wallpapers[pagination.page].url;

const createPages = (start, end) => {
  // Check offset to prevent extra page being created
  if (offset - pagination.limit < end) end = offset - pagination.limit;
  // Delete previous pages
  if (pagination.pageList.length > 0) pagesContainer.innerHTML = "";

  // Create new pages
  for (let j = start; j <= end; j++) {
    const page = document.createElement("div");
    page.className = "dot";
    pagesContainer.appendChild(page);
  }

  pagination.pageList = document.querySelectorAll(".dot");
};

const setActivePage = (pageNum) => {
  pagination.page = pageNum;

  // Find the page range... (0 - 5) (5 - 10) (10 - 15) etc...
  const prevRange = (pageNum - 1) * pagination.limit;
  const currRange = pageNum * pagination.limit;

  createPages(prevRange, currRange);

  // Select the first page and toggle it active
  pagination.item = pagination.pageList[0];
  pagination.item.classList.toggle("active");
  //   console.log(pagination);
};

const nextPage = () => {
  // Untoggle previous page
  pagination.item.classList.toggle("active");

  // Checking if at the end of current pagelist
  if (Math.floor(pagination.index / pagination.count) === pagination.page) {
    setActivePage(pagination.page + 1);
    return;
  } else if (
    Math.floor(pagination.index / pagination.count) + 1 <
    pagination.page
  ) {
    setActivePage(pagination.page - 1);
    return;
  }

  // Otherwise go to the next page
  pagination.item = pagination.pageList[pagination.index % pagination.count];
  pagination.item.classList.toggle("active");
};

window.addEventListener("load", () => {
  // Start at page 1
  setActivePage(1);

  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      switch (e.target.textContent) {
        case "arrow_forward":
          // Edge checking
          if (pagination.index < wallpapers.length - 1) {
            pagination.index += 1;
            nextPage();
          }

          break;
        case "arrow_back":
          // Edge checking
          if (pagination.index > 0) {
            pagination.index -= 1;
            nextPage();
          }

          break;
      }
      // Setting background to new page
      bg.src = wallpapers[pagination.index].url;
      img.src = wallpapers[pagination.index].url;
    });
  });
});
