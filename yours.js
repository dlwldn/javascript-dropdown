const dropDownBtn = document.querySelector(".dropdown-toggle");
const dropDownMenu = document.querySelector(".dropdown-menu");
const submitBtn = document.querySelector(".next-button");
const dropDownItems = document.querySelectorAll(".dropdown-option");


dropDownBtn.addEventListener("click", function() {
    if(dropDownMenu.classList[1] === "show") {
        dropDownMenu.classList.remove("show")
        return;
    }
    dropDownMenu.classList.add("show");
})

dropDownBtn.addEventListener("blur", function() {
    dropDownMenu.classList.remove("show");
})

for(let i = 0; i < dropDownItems.length; i++ ) {
    dropDownItems[i].addEventListener("click", function(e) {
            dropDownBtn.classList.add('selected');
            dropDownBtn.innerHTML = e.target.innerHTML;
            submitBtn.disabled = false;
    })
}
