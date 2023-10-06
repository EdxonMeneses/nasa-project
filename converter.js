document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function () {
    const targetId = this.getAttribute("href").substring(1);
    document
      .querySelectorAll("nav a")
      .forEach((a) => a.classList.remove("font-bold"));
    this.classList.add("font-bold");
    document
      .querySelectorAll("div[id]")
      .forEach((div) => div.classList.add("hidden"));
    document.getElementById(targetId).classList.remove("hidden");
  });
});
