import { revalidatePath } from 'next/cache';
import { connectDB } from './utils';
import { DataManagement, General, Projects } from './models';
import { redirect } from 'next/navigation';

export const addGeneralData = async (formData) => {
  'use server';
  const { activity, dateTime, location } = Object.fromEntries(formData);

  try {
    connectDB();
    const newData = new General({
      activity,
      dateTime,
      location,
    });

    await newData.save();
  } catch (err) {
    console.log(err);
    throw new Error('Failed to add Data!');
  }
  revalidatePath('/dashboard/');
  redirect('/dashboard');
};

export const addDataManage = async (formData) => {
  'use server';
  const { hasil, penyimpanan, penanggungJawab, kategori } =
    Object.fromEntries(formData);

  try {
    connectDB();
    const newData = new DataManagement({
      hasil,
      penyimpanan,
      penanggungJawab,
      kategori,
    });

    await newData.save();
  } catch (err) {
    console.log(err);
    throw new Error('Failed to add Data!');
  }
  revalidatePath('/dashboard/datapages');
  redirect('/dashboard/datapages');
};

export const addProjects = async (formData) => {
  'use server';
  const { projectName, laboratorium, penanggungJawab, status } =
    Object.fromEntries(formData);

  try {
    connectDB();
    const newData = new Projects({
      projectName,
      laboratorium,
      penanggungJawab,
      status,
    });

    await newData.save();
  } catch (err) {
    console.log(err);
    throw new Error('Failed to add Data!');
  }
  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
};
