const botao = document.getElementById("button");
botao.addEventListener("click", anexar);

function anexar(){
    const node = document.createElement("li");
    const textnode = document.getElementById("campo").value;
    //const valor = textnode.value;
    event.preventDefault();

    node.appendChild(textnode);
    document.getElementById("lista").appendChild(node);
}
