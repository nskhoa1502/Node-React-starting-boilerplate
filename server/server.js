const app = require("./src/index");

const PORT = process.env.APP_PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`App start at ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log(`Exit Server Express`));
});
