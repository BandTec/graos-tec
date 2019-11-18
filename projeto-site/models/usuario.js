'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idUsuario: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		Nome: {
			field: 'Nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		LoginUsuario: {
			field: 'loginUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		Senha: {
			field: 'Senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		Email: {
			field: 'Email',
			type: DataTypes.STRING,
			allowNull: false
		},
		Telefone: {
			field: 'Telefone',
			type: DataTypes.STRING,
			allowNull: false
		},
		Nivel_acesso: {
			field: 'Nivel_acesso',
			type: DataTypes.INTEGER,
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
