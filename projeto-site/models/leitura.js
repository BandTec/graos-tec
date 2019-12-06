'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura',{	
		idLeitura: {
			field: 'idLeitura',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		data_hora: {
			field: 'data_hora',
			type: DataTypes.DATE,
			allowNull: false
		},
		temperatura_atual: {
			field: 'temperatura_atual',
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		temperatura_atual: {
			field: 'temperatura_atual',
			type: DataTypes.DECIMAL,
			allowNull: false
		}
	},

	{
		tableName: 'leitura', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Leitura;
};
