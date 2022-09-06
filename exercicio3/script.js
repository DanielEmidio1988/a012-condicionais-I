let nacionalidade = prompt("Digite aqui sua nacionalidade").toLocaleLowerCase()

if (nacionalidade === "brasileira" || nacionalidade === "argentina" || nacionalidade === "uruguaia" || nacionalidade === "chilena" || nacionalidade === "colombiana"){
    console.log("Então você é ", nacionalidade)
}else{
    console.log("Nacionalidade não encontrada")
}