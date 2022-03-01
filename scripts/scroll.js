window.addEventListener("load", (event) => {
  window.onscroll = () => shrink();

  document.querySelector("header").classList.add("h-screen");

  function shrink() {
    if (document.documentElement.scrollTop) {
      document.querySelector("header img").classList.add("h-20");
      document.querySelector("header img").classList.remove("col-span-full");
      document.querySelector("header div").classList.add("bg-fel-black");
      document.querySelector("header div").classList.add("items-center");
      document.querySelector("header div").classList.remove("h-full");
      document.querySelector("header div").classList.remove("items-end");
      document.querySelector("header nav").classList.remove("w-full");
      document.querySelector("header nav").classList.remove("pb-12");
      document.querySelector("header").style.height =
        document.querySelector("header div").clientHeight + "px";
    }
  }
});
