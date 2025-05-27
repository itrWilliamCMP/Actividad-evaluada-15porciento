import { Schema, model } from "mongoose";

const employeesSchema = new Schema(
  {
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    telephone: {
      type: String,
    },
    dui: {
      type: String,
    },
    address: {
      type: String,
    },
    birthdate: {
      type: Date,
    },
    hireDate: {
      type: Date,
    },
    isssNumber: {
      type: String,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Employees", employeesSchema);
