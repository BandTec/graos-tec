'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Armazem = sequelize.define('Armazem',{
		id_Armazem: {
			field: 'id_Armazem',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
        },		
        
		Nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		
		
		Temperatura_Ideal:{
			field: 'temperatura_ideal',
			type: DataTypes.DECIMAL,
			allowNull: false
		},

		Umidade_Ideal:{
			field: 'umidade_ideal',
			type: DataTypes.DECIMAL,
			allowNull: false
		},

		Fk_Usuario: {
			field:'fk_usuario',
			type: DataTypes.INTEGER,
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
		tableName: 'armazem', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Armazem;
};
