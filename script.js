const input = document.getElementById("keyword");
const banner = document.getElementById("banner");

input.addEventListener("input", () => {

    const word = input.value;

    if(word === "靴"){
        banner.textContent = "👟 シューズバナー";
        banner.style.background = "#87CEEB";
    }
    else if(word === "バッグ"){
        banner.textContent = "👜 バッグバナー";
        banner.style.background = "#FFD700";
    }
    else{
        banner.textContent = "バナーがここに表示されます";
        banner.style.background = "#eee";
    }

});