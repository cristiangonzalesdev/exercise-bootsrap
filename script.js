const modal = document.getElementById("modal");

const newPostBtn = document.getElementById("newPostBtn");

const closeBtn = document.getElementById("closeBtn");

const closeX = document.getElementById("closeX");

newPostBtn.onclick = function () {
    modal.style.display = "flex";
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};

closeX.onclick = function () {
    modal.style.display = "none";
};

const settingsBtn = document.getElementById("settingsBtn");

const settingsMenu = document.getElementById("settingsMenu");

settingsBtn.onclick = function () {
    if (settingsMenu.style.display === "block") {
        settingsMenu.style.display = "none";
    } else {
        settingsMenu.style.display = "block";
    }
};

const gridBtn = document.getElementById("gridBtn");

const listBtn = document.getElementById("listBtn");

const gallery = document.getElementById("gallery");

gridBtn.onclick = function () {
    const photos = gallery.children;

    for (let photo of photos) {
        photo.classList.remove("col-12", "col-md-8", "mx-auto");
        photo.classList.add("col-12", "col-sm-4");

        photo.querySelector(".photo-info").style.display = "none";
        photo.querySelector(".photo-description").style.display = "none";
    }
};;

listBtn.onclick = function () {
    const photos = gallery.children;

    for (let photo of photos) {
        photo.classList.remove("col-sm-4");
        photo.classList.add("col-12", "col-md-8", "mx-auto");

        photo.querySelector(".photo-info").style.display = "block";
        photo.querySelector(".photo-description").style.display = "block";
    }
};