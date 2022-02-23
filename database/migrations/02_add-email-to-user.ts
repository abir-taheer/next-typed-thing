import { DataTypes, QueryInterface } from "sequelize";
import { MigrationFn } from "umzug";

const up: MigrationFn<QueryInterface> = async function ({
  context: queryInterface,
}) {
  await queryInterface.addColumn("User", "email", {
    type: DataTypes.STRING,
    allowNull: false,
  });
};

const down: MigrationFn<QueryInterface> = async function ({
  context: queryInterface,
}) {
  await queryInterface.removeColumn("User", "email");
};

export { up, down };
