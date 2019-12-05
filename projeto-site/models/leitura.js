'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura',{	
		idCaptura: {
			field: 'idLeitura',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		hora_data: {
			field: 'data_hora',
			type: DataTypes.DATE,
			allowNull: false
		},
		tipo: {
			field: 'temperatura_atual',
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		dado: {
			field: 'temperatura_atual',
			type: DataTypes.DECIMAL,
			allowNull: false
	}, 
	{
		tableName: 'leitura', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Leitura;
};
