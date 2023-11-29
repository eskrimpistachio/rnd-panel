import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

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

export const dataCard = {
  "general" : {
    "proyek"  : "7",
    "uang" : "Rp. 1,252,344",
    "hari" : "18 Hari"
  },
  "dataManage" : {
    "hasilPenelitian" : "50",
    "bahanMentah" : "27",
    "hasilOlahan" : "58"
  },
  "projects" : {
    "totalProjects" : "187",
    "sedangBerjalan" : "17",
    "peneliti" : "50"
  }
}

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const General =
  mongoose.models.General || mongoose.model('General', generalSchema);
export const DataManagement =
  mongoose.models.DataManagement ||
  mongoose.model('DataManagement', dataManageSchema);
export const Projects =
  mongoose.models.Projects || mongoose.model('Projects', projects);
