export let tg = document.querySelectorAll(".tags a")
console.log(tg);
for (let i = 0; i < tg.length; i++) {
    tg[i].addEventListener("click", function () {
        for (let k = 0; k < tg.length; k++) {
            tg[k].classList.remove("active");
        }
        tg[i].classList.add("active")
    })
}