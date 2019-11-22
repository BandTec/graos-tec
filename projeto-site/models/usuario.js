'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id_Usuario: {
			field: 'id_Usuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		Nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},

		Email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},

		Senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
	
		Telefone: {
			field: 'telefone',
			type: DataTypes.STRING,
			allowNull: false
		},

		
		Cep: {
			field: 'cep',
			type: DataTypes.STRING,
			allowNull: false
		},

		Rua: {
			field: 'rua',
			type: DataTypes.STRING,
			allowNull: false
		},
		Numero: {
			field: 'numero',
			type: DataTypes.STRING,
			allowNull: false
		},

		Bairro: {
			field: 'bairro',
			type: DataTypes.STRING,
			allowNull: false
		},

		Cidade: {
			field: 'cidade',
			type: DataTypes.STRING,
			allowNull: false
		},

		Estado: {
			field: 'estado',
			type: DataTypes.STRING,
			allowNull: false
		},

		Complemento: {
			field: 'complemento',
			type: DataTypes.STRING,
			allowNull: false
		}


	}, 
	{
		tableName: 'usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
