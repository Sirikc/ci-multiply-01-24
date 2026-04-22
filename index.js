const nodeBtn = document.querySelector("#btn");
export const degree = (a, b)=>{
    if (b === 0) {
        return "infinit";
    }
    return a / b;
}

function buttonDegree(degree, inputId1, inputId2) {
    const a = +document.getElementById(inputId1).value;
    const b = +document.getElementById(inputId2).value;
    console.log(degree(a, b));
}

nodeBtn.addEventListener("click", ()=>buttonDegree(degree, "input1", "input2"));
