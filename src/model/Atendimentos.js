const db = require("../database");
const DataTypes = require("sequelize");
const Psicologos  = require("./Psicologos");
const Pacientes = require("./Pacientes");

const Atendimentos = db.define(
  "Atendimentos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_atendimento: {
      type: DataTypes.DATE,
      field: "data_atendimento",
    },
    psicologos_paciente: {
      type: DataTypes.INTEGER,
      references: {
        model: Psicologos,
        key: "id_psicologos"
      },
      field: "psicologos_paciente",
    },
    paciente_psicologos: {
      type: DataTypes.INTEGER,
      references: {
        model: Pacientes,
        key: "id_paciente"
      },
      field: "paciente_psicologos",
    },
    observacao: {
      type: DataTypes.STRING(1000),
      field: "observacao",
    },
  },
  {
    tableName: "atendimentos",
    timestamps: false,
  }
);
module.exports = Atendimentos;
