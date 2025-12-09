const mainPart = document.querySelector(".main-part");
const chatArea = document.querySelector(".chatarea-part");

mainPart.addEventListener("scroll", () => {
  chatArea.scrollTop = mainPart.scrollTop;
});

chatArea.addEventListener("scroll", () => {
  mainPart.scrollTop = chatArea.scrollTop;
});
