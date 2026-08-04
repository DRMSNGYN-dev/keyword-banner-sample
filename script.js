const input = document.getElementById("keyword");
const banner = document.getElementById("banner");
const bannerImage = document.getElementById("bannerImage");
const bannerText = document.getElementById("bannerText");

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
    bannerText.textContent = "データを読み込めませんでした";
  });

input.addEventListener("input", () => {
  const word = input.value.trim();
  const item = keywordData[word];

  bannerImage.style.display = "none";

  if (item) {
    bannerText.textContent = `${item.emoji} ${item.title}`;
    banner.style.background = item.background;
    return;
  }

  bannerText.textContent = "バナーがここに表示されます";
  banner.style.background = "#eee";
});