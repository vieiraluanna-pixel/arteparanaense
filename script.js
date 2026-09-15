const botoesCurtir = document.querySeletorAll(".curtir");
botoesCurtir.forEach(function(botoesCurtir){
    let curtiu = false;
    botaoCurtir.addEventListener("click , curtir");
    function curtir(){
        const contador = botaoCurtir.querySeletor("span");
        if(curtiu === false){
            contador.textContent++;
            curtiu = true:}
            else{
                contador.textContent--;
                curtiu = false;
            }
}
});

