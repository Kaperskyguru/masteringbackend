module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'solotwpb_wp285',
    password: process.env.DB_PASSWORD || '].-nShp54c2w6@',
    database: process.env.DB_NAME || 'solotwpb_wp285',
    host: process.env.DB_HOSTNAME || 'https://server54.web-hosting.com:2083',
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT || 3306,
  },
  test: {
    username: 'solotwpb_wp285',
    password: '].-nShp54c2w6@',
    database: 'solotwpb_wp285',
    host: 'https://server54.web-hosting.com:2083/',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME || 'solotwpb_wp285',
    password: process.env.DB_PASSWORD || '].-nShp54c2w6@',
    database: process.env.DB_NAME || 'solotwpb_wp285',
    host: process.env.DB_HOSTNAME || 'https://server54.web-hosting.com',
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT || 3306,
  },
}
