var tabLinks = document.getElementsByClassName("tab-links");
var tabContent = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active-link');
    }
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('active-tab');
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}
