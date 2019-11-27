'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura',{	
		idCaptura: {
			field: 'idCaptura',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		hora_data: {
			field: 'hora_data',
			type: DataTypes.DATE,
			allowNull: false
		},
		tipo: {
			field: 'tipo',
			type: DataTypes.STRING,
			allowNull: false
		},
		dado: {
			field: 'dado',
			type: DataTypes.DECIMAL, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		momento_grafico: {
			type: DataTypes.VIRTUAL, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
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
