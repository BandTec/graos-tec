'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura',{	
		id: {
			field: 'id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		data_hora: {
			field: 'data_hora',
			type: DataTypes.DATE,
			allowNull: false
		},
		temperatur: {
			field: 'temperatura',
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		umidade: {
			field: 'umidade',
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
