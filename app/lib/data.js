import { General } from './models';
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
