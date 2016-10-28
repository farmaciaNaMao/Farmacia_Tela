function detalhesPedidos(varreObj){

    var informacoesCliente = {
        btnMostrarInfo : document.querySelector(".info-cliente-btn"),
        contInfoCliente : document.querySelector(".localizacao-cliente"),
    };

    var btnInfoCliente = {
        btnProposta : document.querySelector(".proposta"),
        btnPedidoPronto : document.querySelector(".solicitar-pedido-pronto"),
        btnSuporte : document.querySelector(".solicitar-suporte"),
    };

    var telasInfoCliente = {
        telaRegistros : document.querySelector(".registros"),
        telaProposta : document.querySelector(".tela-proposta"),
        telaPedidoPronto : document.querySelector(".tela-peidido-pronto"),
        telaSuporte: document.querySelector(".tela-suporte")
    };

    informacoesCliente.contInfoCliente.style.display = 'none';


    //Quando clicar em Informacoes do Cliente
    informacoesCliente.btnMostrarInfo.addEventListener("click", function(){
        if($(".localizacao-cliente").is(":hidden")){
            informacoesCliente.contInfoCliente.style.display = 'initial';
        }else if($(".tela-proposta").is(":visible") ||
            $(".tela-proposta").is(":visible") || $(".tela-suporte")) {

                varreObj(telasInfoCliente);
                telasInfoCliente.telaRegistros.style.display = 'initial';
        }else {
            informacoesCliente.contInfoCliente.style.display = 'none';
        }
    });


    //Clicou na Proposta
    btnInfoCliente.btnProposta.addEventListener("click", function(){

        //Mudar a Cor da Letra eo fundo
        $(".proposta button").css({"background-color" : "#F1003B", "color":"#fff"});

        if($(".registros").is(":visible") ||
           $(".tela-peidido-pronto").is(":visible") || $(".tela-suporte")){
            varreObj(telasInfoCliente);
            telasInfoCliente.telaProposta.style.display='initial';
        }
    });

    //Clicou no Pedido Pronto
    btnInfoCliente.btnPedidoPronto.addEventListener("click", function(){
        if($(".registros").is(":visible") ||
            $(".tela-proposta").is(":visible") || $(".tela-suporte")){
            varreObj(telasInfoCliente);
            telasInfoCliente.telaPedidoPronto.style.display='initial';
        }
    });

    //Clicou no Suporte
    btnInfoCliente.btnSuporte.addEventListener("click", function(){
        if($(".registros").is(":visible") ||
            $(".tela-proposta").is(":visible") || $(".tela-peidido-pronto")){
            varreObj(telasInfoCliente);
            telasInfoCliente.telaSuporte.style.display='initial';
        }
    })







}

