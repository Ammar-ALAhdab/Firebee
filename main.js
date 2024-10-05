// showing & hiding  menu in small screens
const menu = document.querySelector(".menu-nav-links");
const menuButton = document.querySelector(".menuButton");
const btnIcon = document.querySelector("#btnIcon");

menuButton.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    btnIcon.classList.remove("fa-bars");
    btnIcon.classList.add("fa-times");
  } else {
    menu.classList.add("hidden");
    btnIcon.classList.add("fa-bars");
    btnIcon.classList.remove("fa-times");
  }
});

// functionality of carousel

const changeImage = (clickedImg) => {
  let mainImage = document.getElementById("bigImg");
  mainImage.src = clickedImg.src;
};

const smallImages = document.querySelectorAll("#smallImages div img");

smallImages.forEach((img) => {
  img.addEventListener("click", function () {
    changeImage(this);
  });
});

// functionality of faq

const faqButtons = document.querySelectorAll(".faqBtn");
const allParagraphs = document.querySelectorAll(".question-box-text");

faqButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    if (allParagraphs[index].style.display === "block") {
      allParagraphs[index].style.display = "none";
      this.querySelector("i").classList.remove("fa-minus");
      this.querySelector("i").classList.add("fa-plus");
    } else {
      allParagraphs.forEach((paragraph) => {
        paragraph.style.display = "none";
      });

      const allIcons = document.querySelectorAll(".faqBtn i");
      allIcons.forEach((icon) => {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      });

      allParagraphs[index].style.display = "block";
      this.querySelector("i").classList.remove("fa-plus");
      this.querySelector("i").classList.add("fa-minus");
    }
  });
});
