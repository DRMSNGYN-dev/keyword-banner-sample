const input = document.getElementById("keyword");
const banner = document.getElementById("banner");
const title = document.getElementById("title");
const description = document.getElementById("description");
const bannerImage = document.getElementById("bannerImage");
const bannerLink = document.getElementById("bannerLink");

let keywordData = {};

fetch("keyword.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("JSONの読み込みに失敗しました");
    }

    return response.json();
  })
  .then((data) => {
    keywordData = data;
  })
  .catch((error) => {
    console.error(error);
    title.textContent = "データを読み込めませんでした";
  });

input.addEventListener("input", () => {
  const word = input.value.trim();
  const item = keywordData[word];

  if (item) {
    title.textContent = item.title;
    description.textContent = item.description;

    bannerImage.src = item.image;
    bannerImage.alt = item.title;
    bannerImage.style.display = "block";

    bannerLink.href = item.url;
    bannerLink.style.display = "inline-block";

    banner.style.background = item.background;
    return;
  }

  title.textContent = "";
  description.textContent = "";

  bannerImage.src = "";
  bannerImage.alt = "";
  bannerImage.style.display = "none";

  bannerLink.removeAttribute("href");
  bannerLink.style.display = "none";

  banner.style.background = "#eee";
});