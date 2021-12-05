const { createClient } = require("redis");
let client;
// (async () => {
//   client = createClient();

//   client.on("error", (err) => console.log("Redis Client Error", err));
//   await client.connect();

//   await client.set("key", "value");
// })();

module.exports = client;
