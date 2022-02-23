import { DataTypes, QueryInterface } from "sequelize";
import { MigrationFn } from "umzug";

const up: MigrationFn<QueryInterface> = async function ({
  context: queryInterface,
}) {
  await queryInterface.createTable("User", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
};

const down: MigrationFn<QueryInterface> = async function ({
  context: queryInterface,
}) {
  await queryInterface.dropTable("User");
};

export { up, down };
