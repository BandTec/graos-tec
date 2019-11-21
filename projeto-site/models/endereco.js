'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Endereco = sequelize.define('endereco',{
		idEndereco: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		Cep: {
			field: 'cep',
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
		}
	}, 
	{
		tableName: 'endereco', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Endereco;
};
