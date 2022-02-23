import umzug from "./database/umzug";

require("ts-node/register");

umzug
  .up()
  .then(() => {
    console.log("All migrations completed successfully.");
  })
  .catch((er) => {
    console.error(er);
    process.exit(1);
  });
