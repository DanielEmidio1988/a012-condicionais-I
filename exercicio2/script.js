let idade = Number (prompt("Qual a sua idade?"))
let isEnsinoMedio = confirm("Terminou o ensino médio?")
let isCursandoFaculdade = confirm("Está cursando alguma faculdade?")

if(idade >= 18){
    console.log("O estudante tem 18 anos ou mais")
}else{
    console.log("O estudante não tem 18 anos")
}

if(isEnsinoMedio){
        console.log("Terminou o ensino médio")
        if (!isCursandoFaculdade){
            console.log("O estudante não está cursando uma faculdade")
        }else{
            console.log("O estudante está cursando uma faculdade")
        }
    }else{
        console.log("Não terminou o ensino médio")
    }  