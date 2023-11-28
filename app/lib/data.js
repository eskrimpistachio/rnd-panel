import { DataManagement, General, Projects } from './models';
import { connectDB } from './utils';

export const fetchGeneral = async () => {
  try {
    connectDB();
    const general = await General.find();
    console.log(general);
    return general;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch!');
  }
};

export const fetchDataManage = async () => {
  try {
    connectDB();
    const dataManage = await DataManagement.find();
    console.log(dataManage);
    return dataManage;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch!');
  }
};

export const fetchProjects = async () => {
  try {
    connectDB();
    const projects = await Projects.find();
    console.log(projects);
    return projects;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch!');
  }
};
