"use strict";
class IndexRoute {
	async index(req, res) {
		res.render("index/index");
	}
	async sobre(req, res) {
		let opcoes = {
			titulo: "Sobre"
		};
		res.render("index/sobre", opcoes);
	}
	async produtos(req, res) {
		let produtoA = {
			id: 1,
			nome: "Produto A",
			valor: 25
		};
		let produtoB = {
			id: 2,
			nome: "Produto B",
			valor: 15
		};
		let produtoC = {
			id: 3,
			nome: "Produto C",
			valor: 100
		};
		let produtosVindosDoBanco = [produtoA, produtoB, produtoC];
		let opcoes = {
			titulo: "Listagem de Produtos",
			produtos: produtosVindosDoBanco
		};
		res.render("index/produtos", opcoes);
	}
}
module.exports = IndexRoute;
//# sourceMappingURL=index.js.map