import mongoose from 'mongoose';

const general = new mongoose.Schema(
  {
    activty: {
      type: String,
      required: true,
    },
    dateTime: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const dataManagement = new mongoose.Schema(
  {
    hasil: {
      type: String,
      required: true,
    },
    penyimpanan: {
      type: String,
      required: true,
    },
    penanggungJawab: {
      type: String,
      required: true,
    },
    kategori: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const projects = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    laboratorium: {
      type: String,
      required: true,
    },
    penanggungJawab: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const General =
  mongoose.model.General || mongoose.model('General', general);
export const DataManagement =
  mongoose.model.General || mongoose.model('Data Management', dataManagement);
export const Projects =
  mongoose.model.General || mongoose.model('Projects', projects);
