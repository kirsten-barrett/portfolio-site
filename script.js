// add & remove "responsive" class
const responsiveNav = () => {
    let x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
}