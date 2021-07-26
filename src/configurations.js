require("dotenv").config();

module.exports = {
  database: {
    connection: {
      host: process.env.VOVAN_DATABASE_HOST || "ec2-54-83-82-187.compute-1.amazonaws.com",
      port: Number(process.env.VOVAN_DATABASE_PORT) || 5432,
      user: process.env.VOVAN_DATABASE_USER || "satzgdavwexyiw",
      password:
        process.env.VOVAN_DATABASE_PASSWORD ||
        "5f1aaa67a376e12665ba35e3dfe92582e8591f7a0fd8b663b063d160602fd036",
      database: process.env.VOVAN_DATABASE_DATABASE || "de7rvpiui5f86h",
      // ssl: {
      //   rejectUnauthorized: false,
      // },
    },
  },
};
