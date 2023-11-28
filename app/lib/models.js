import mongoose from 'mongoose';

const generalSchema = new mongoose.Schema(
  {
    activity: {
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

const dataManageSchema = new mongoose.Schema(
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
  mongoose.models.General || mongoose.model('General', generalSchema);
export const DataManagement =
  mongoose.models.DataManagement ||
  mongoose.model('DataManagement', dataManageSchema);
export const Projects =
  mongoose.models.Projects || mongoose.model('Projects', projects);
