/** Database connection for messagely. */


const { Client } = require("pg");
const { DB_URI } = require("./config");

pw = process.env.PW;

const client = new Client(DB_URI);

client.connect();


module.exports = client;
