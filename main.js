var boxs = document.querySelectorAll(".section .container .box");
console.log(boxs);
console.log(boxs[0]);
window.onscroll = function () {
    boxs.forEach(box => {
        if ((window.scrollY + 600) >= box.offsetTop) {
            box.classList.add("show");
        }
        else {
            box.classList.remove("show");
        }
    });

};