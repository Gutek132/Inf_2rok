const OblObjJajka = () => {
    let a = document.querySelector("#first-element").value;
    let b = document.querySelector("#second-element").value;
    let c = document.querySelector("#third-element").value;
    let objetosc = (4/3) * Math.PI * a * b * c;
    return objetosc;
};

const cleanNewDiv = () => {
	let allNewDivs = document.querySelectorAll(".new-div");
	allNewDivs.forEach((element) => element.remove());
};

const genwynik = () => {
    cleanNewDiv();
    wynik = OblObjJajka();
    const elementsDiv = document.querySelector("#elements");
    let newDiv = document.createElement("div");
    newDiv.className = "new-div";
    newDiv.textContent = wynik;
    elementsDiv.appendChild(newDiv);
};

calculate.addEventListener("click", genwynik);