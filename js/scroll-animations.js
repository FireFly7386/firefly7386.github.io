function showItems() {
    var itemsToShow = document.querySelectorAll(".scroll-animation");
    for (var i = 0; i < itemsToShow.length; i++) {
        var windowHeight = window.innerHeight;
        var whenToShowTheItem = 750;
        var topOfTheItem = itemsToShow[i].getBoundingClientRect().top;

        if (windowHeight - whenToShowTheItem > topOfTheItem) {
            itemsToShow[i].classList.add("on");
        } else {
            itemsToShow[i].classList.remove("on");
        }
    }
}

window.addEventListener("scroll", showItems);