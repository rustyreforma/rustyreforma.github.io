document.querySelector('.burger').addEventListener("click", myFunction);

function myFunction() {
    this.classList.toggle("open");

    if (this.classList.contains("open")) {
        document.querySelector('.header-navigation').style.height = '300px';
    } else {
        document.querySelector('.header-navigation').style.height = '0';
    }   
}