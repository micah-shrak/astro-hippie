// Config settings with local postgres dev and Heroku postgres production
require('dotenv').config();

const localPostgres = {
	host: process.env.HOST,
	database: process.env.DATABASE,
	user: process.env.USER,
	port: process.env.PORT,
	password: process.env.PASS || '',
};

const dbConnection = process.env.DATABASE_URL || localPostgres;

export const development = {
	client: 'pg',
	connection: dbConnection,
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		directory: './database/migrations',
		tableName: 'ahdev_migrations',
	},
	seeds: {
		directory: './database/development/seeds',
	},
};
export const production = {
	client: 'pg',
	connection: dbConnection,
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		directory: './database/migrations',
		tableName: 'ahprod_migrations',
	},
	seeds: {
		directory: './database/productions/seeds',
	},
};
