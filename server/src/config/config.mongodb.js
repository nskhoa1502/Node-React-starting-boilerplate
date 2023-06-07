// "use strict";

// ================== LOCALHOST MONGODB (will update) ====================

// const config = {
//   app: {
//     port: 3000,
//   },
//   db: {
//     host: "localhost",
//     port: 27017,
//     name: "db",
//   },
// };

// ================ CLOUD MONGODB ===================================

// const config = {
//   port: process.env.APP_PORT || 5000,
//   db: {
//     host: process.env.DB_HOST || "ecommerce.rj6msah.mongodb.net",
//     name: process.env.DB_NAME || "ecommerce",
//     username: process.env.DB_USERNAME // education only
//     password: process.env.DB_PASSWORD // education only
//     options: {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       retryWrites: true,
//       w: "majority",
//     },
//   },
// };

// const env = process.env.NODE_ENV || "cloud";

// console.log(config[env], env);
// module.exports = config[env];
