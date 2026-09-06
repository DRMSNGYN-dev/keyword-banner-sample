const input = document.getElementById("keywordInput");
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

if (word === "") {
  banner.classList.remove("no-result");

  title.textContent = "";
  description.textContent = "";

  bannerImage.src = "";
  bannerImage.alt = "";
  bannerImage.style.display = "none";

  bannerLink.removeAttribute("href");
  bannerLink.style.display = "none";

  banner.style.background = "#eee";
  return;
}

const item = Object.values(keywordData).find((product) => {
  return product.keywords.some((keyword) => {
    return keyword.includes(word);
  });
});

  if (item) {
    banner.classList.remove("no-result");

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

banner.classList.add("no-result");
title.textContent = "該当する商品が見つかりません";
description.textContent = "「靴」「バッグ」「帽子」のいずれかを入力してください。";

bannerImage.src = "";
bannerImage.alt = "";
bannerImage.style.display = "none";

bannerLink.removeAttribute("href");
bannerLink.style.display = "none";

banner.style.background = "#eee";
});