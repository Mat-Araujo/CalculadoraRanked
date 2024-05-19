function subtrair(vitorias, derrotas) {
   
    return vitorias - derrotas;
    
}

let saldoVitorias = subtrair(736, 654)


 if(saldoVitorias<= 10){
        let Nivel = "Ferro"
    }else if (saldoVitorias <= 20){
        Nivel = "Bronze"
    }else if (saldoVitorias <= 50){
        Nivel = "Prata"
    }else if (saldoVitorias <= 80){
        Nivel = "Ouro"
    }else if (saldoVitorias <= 90){
        Nivel = "Diamante"
    }else if (saldoVitorias <= 100){
        Nivel = "Lendário"
    }else if (saldoVitorias <= 101){
        Nivel = "Imortal"
}


console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível de " + Nivel )