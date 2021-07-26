require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host:
        process.env.VOVAN_DATABASE_HOST
        ||
        "127.0.0.1",
      port: Number(process.env.VOVAN_DATABASE_PORT) || 5432,
      user: process.env.VOVAN_DATABASE_USER || "postgres",
      password:
        process.env.VOVAN_DATABASE_PASSWORD ||
        "123456",
      database: process.env.VOVAN_DATABASE_DATABASE || "vovan",
      // ssl: {
      //   rejectUnauthorized: false,
      // },
    },

    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
