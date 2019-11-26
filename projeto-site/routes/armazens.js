var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Armazem = require('../models').Armazem;
let sessoes = [];

// router.post('/armazens', function(req, res, next) {
// 	console.log('Recuperando usuário por login e senha');

// 	var login = req.body.email; // depois de .body, use o nome (name) do campo em seu formulário de login
// 	var senha = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de login	
	
// 	let instrucaoSql = `select * from armazem as ar, usuario as user, Proprietario as pr where 
// 	user.id_usuario = pr.fk_usuario and ar.id_armazem = pr.fk_armazem'`;
// 	console.log(instrucaoSql);

// 	sequelize.query(instrucaoSql, {
// 		model: Usuario
// 	}).then(resultado => {
// 		console.log(`Encontrados: ${resultado.length}`);

// 		if (resultado.length == 1) {
// 			sessoes.push(resultado[0].dataValues.email);
// 			console.log('sessoes: ',sessoes);
// 			res.json(resultado[0]);
// 		} else if (resultado.length == 0) {
// 			res.status(403).send('Login e/ou senha inválido(s)');
// 		} else {
// 			res.status(403).send('Mais de um usuário com o mesmo login e senha!');
// 		}

// 	}).catch(erro => {
// 		console.error(erro);
// 		res.status(500).send(erro.message);
//   	});
// });


/* Verificação de usuário */
router.get('/sessao/:login', function(req, res, next) {
	let login = req.params.login;
	console.log(`Verificando se o usuário ${login} tem sessão`);
	
	let tem_sessao = false;
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] == login) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${login} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}
	
});


/* Cadastrar armazém */
router.post('/', function(req, res, next) {
	console.log('Criando um armazém');
	
	Armazem.create({
		Nome : req.body.nome,
		Cep : req.body.cep,
		Rua : req.body.rua,
		Numero: req.body.numero,
		Bairro: req.body.bairro,
		Cidade: req.body.cidade,
		Estado: req.body.estado,
		Complemento: req.body.complemento
		//fk_usuario: id_usuario
		
	}).then(resultado => {
		console.log(`Armazém criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
		});
});

/* Recuperar todos os armazéns */
router.get('/', function(req, res, next) {
	console.log('Recuperando todos os armazéns');
	Armazem.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});


module.exports = router;
