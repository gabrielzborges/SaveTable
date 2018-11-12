//----------------------- EVENTOS

//Efetuar cadastro
$("button").first().on("click", function(){
	//pegando os dados do input
	var nomeText = $("#nome").val();
	var endText = $("#endereco").val();
	var telText = $("#telefone").val();

	if(!temInputVazio()){  //impedir de cadastrar sem preencher tudo; nao da para usar placeholder aqui pois o button ta com type='button'
		limparInputs();
		//criando nova linha na tabela
		if($("tr").length === 1){  //1 eh quando tem somente a tr da thead
			$("#divTableHead").attr("style", "visibility: visible");
			$("#divTableBody").attr("style", "visibility: visible");
		}
		$("tbody").append("<tr><td>"+nomeText+"</td><td>"+endText+"</td><td>"+telText+"</td><td><input type='checkbox' class='checkLine' style='display: inline-block; width: 15px; vertical-align: top;'></td></tr>");
	}
});


//Remover Cadastro
$("button").last().on("click", function(){
	//pegar todas as linhas em que as checkBox estao marcadas
	$(".checkLine:checked").parent().parent().fadeOut(500, function(){
		$(this).remove();
		$("#checkAll").prop("checked", false);
		if($("tr").length === 1){	//1 eh quando tem somente a tr da thead
			$("#divTableHead").attr("style", "visibility: hidden");
			$("#divTableBody").attr("style", "visibility: hidden");
		}
	});
});


//Evento para dar check em todas as linhas ou tirar
$("#checkAll").on("click", function(){
	//se todas as linhas foram selecionadas entao deve tirar a selecao de todas
	if($(".checkLine:checked").length < $(".checkLine").length){
		$(".checkLine").prop("checked", true);
	}else{
		$(".checkLine").prop("checked", false);
	}
});


//caso todos os checkLines estejam marcados, entao, marca o checkAll. Caso todos estejam marcados e algum checkLine eh desmarcado, entao, desmarca o checkAll
$("tbody").on("click", ".checkLine", function(){
	$("#checkAll").prop("checked", $(".checkLine:checked").length === $(".checkLine").length);
});	



//---------------------- FUNCOES ----------------------------------------

//funcao para limpar os campos
function limparInputs(){
	$("input").val("");
}


//Funcao para verificar se algum input esta vazio (string "")
function temInputVazio(){
	//pegando os dados do input
	var nomeText = $("#nome").val();
	var endText = $("#endereco").val();
	var telText = $("#telefone").val();

	return (nomeText === "") || (endText === "") || (telText === ""); 
}