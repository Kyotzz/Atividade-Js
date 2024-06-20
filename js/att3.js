const botao = document.getElementById("button");
botao.addEventListener("click", anexar);

function anexar(){
    const textnode = document.getElementById("campo").value;
    let cor = document.querySelector('input[name="cores"]:checked').value;
    
    event.preventDefault();

    let li = document.createElement("li");
    li.textContent = textnode;
    li.style.color = cor;

    document.getElementById("lista").appendChild(li);
    document.getElementById("campo").value = "";
}
