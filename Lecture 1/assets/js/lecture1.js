function onPageLoad() {
    var body = document.getElementsByTagName("body");

    body[0].classList.add("wrapper");

    var heading = document.getElementsByTagName("p");
    heading[0].classList.add("typing")
}

document.onload = onPageLoad();