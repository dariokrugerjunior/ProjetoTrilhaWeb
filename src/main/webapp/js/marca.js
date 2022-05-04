COLDIGO.marcas = new Object();

$(document).ready(function() {
	COLDIGO.marcas.cadastrar = function() {
		var marcas = new Object();
		marcas.nome = document.frmAddMarcas.name.value

		if (document.frmAddMarcas.name.value === "") {
			COLDIGO.exibirAviso("Preencha o campo nome corretamente!");
		} else {
			$.ajax({
				type: "POST",
				url: COLDIGO.PATH + "marca/inserir",
				data: JSON.stringify(marcas),
				success: function(msg) {
					COLDIGO.exibirAviso(msg);
					document.frmAddMarcas.name.value = ""
				},
				error: function(info) {
					COLDIGO.exibirAviso("Erro ao cadastrar uma nova marca: " + info.status + " - " + info.statusText)
				}
			});
		}
	}

	COLDIGO.marcas.carregarMarcas = function() {
		$.ajax({
			type: "GET",
			url: COLDIGO.PATH + "marca/buscar",
			success: function(marcas) {
				$("#listaMarcas").html(COLDIGO.marcas.exibir(marcas));
			},
			error: function(info) {
				COLDIGO.exibirAviso("Erro ao cadastrar uma nova marca: " + info.status + " - " + info.statusText)
			}
		});
	}

	COLDIGO.marcas.carregarMarcas()

	COLDIGO.marcas.exibir = function(listaDeMarcas) {

		var tabela = "<table>" +
			"<tr>" +
			"<th>Nome</th>" +
			"<th class='acoes'>Ações</th>" +
			"</tr>";

		if (listaDeMarcas != undefined && listaDeMarcas.length > 0) {

			for (var i = 0; i < listaDeMarcas.length; i++) {
				tabela += "<tr>" +
					"<td>" + listaDeMarcas[i].nome + "</td>" +
					"<td>" +
					"<a onclick=\"COLDIGO.marcas.exibirEdicao('" + listaDeMarcas[i].id + "')\"><img src='../../imgs/edit.png' alt='Editar marca'></a>" +
					"<a onclick=\"COLDIGO.marcas.excluir('" + listaDeMarcas[i].id + "')\"><img src='../../imgs/delete.png' alt='Excluir marca'></a>" +
					"</td>" +
					"</tr>"
			}

		} else if (listaDeMarcas == "") {
			tabela += "<tr><td colspan='6'>Nenhuma marca encontrada encontrado</td></tr>";
		}

		tabela += "</table>";

		return tabela;
	};

	COLDIGO.marcas.buscar = function() {
		var valorBusca = $("#campoBuscaMarca").val();
		$.ajax({
			type: "GET",
			url: COLDIGO.PATH + "marca/buscar/nome",
			data: "valorBusca=" + valorBusca,
			success: function(dados) {
				dados = JSON.parse(dados);
				$("#listaMarcas").html(COLDIGO.marcas.exibir(dados));

			},
			error: function(info) {
				COLDIGO.exibirAviso("Erro ao consultar as marcas: " + info.status + " - " + info.statusText);
			}
		});
	}

	COLDIGO.marcas.excluir = function(id) {
		$.ajax({
			type: "DELETE",
			url: COLDIGO.PATH + "marca/excluir/" + id,
			success: function(msg) {
				COLDIGO.exibirAviso(msg);
				COLDIGO.marcas.buscar();
			},
			error: function(info) {
				COLDIGO.exibirAviso("Error ao excluir marca: " + info.status + " - " + info.statusText);
			}
		});
	};

	COLDIGO.marcas.exibirEdicao = function(id) {
		$.ajax({
			type: "GET",
			url: COLDIGO.PATH + "marca/buscarPorId",
			data: "id=" + id,
			success: function(marcas) {
				document.frmEditaMarca.idMarca.value = marcas.id;
				document.frmEditaMarca.nome.value = marcas.nome;
				var modalEditaMarca = {
					title: "Editar Marcas",
					height: 200,
					width: 550,
					modal: true,
					buttons: {
						"Salvar": function() {
							COLDIGO.marcas.editar();
						},
						"Cancelar": function() {
							$(this).dialog("close");
						}
					},
					close: function() {
					}
				};

				$("#modalEditaMarca").dialog(modalEditaMarca);

			},
			error: function(info) {
				COLDIGO.exibirAviso("Erro ao buscar marca para edição" + info.status + " - " + info.statusText);
			}
		});
	};
	
	COLDIGO.marcas.editar = function(){
		
		var marca = new Object();
		marca.id = document.frmEditaMarca.idMarca.value;
		marca.nome = document.frmEditaMarca.nome.value;
		
		$.ajax({
			type: "PUT",
			url: COLDIGO.PATH + "marca/alterar",
			data: JSON.stringify(marca),
			success: function(msg){
				COLDIGO.exibirAviso(msg);
				COLDIGO.marcas.buscar();
				$("#modalEditaMarca").dialog("close");
			},
			error: function(info){
				COLDIGO.exibirAviso("Erro ao editar Marca: "+ info.status + " - "+ info.statusText);
			}
		});
	};
});