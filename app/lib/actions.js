'use server';
import { revalidatePath } from 'next/cache';
import { connectDB } from './utils';
import { DataManagement, General, Projects } from './models';
import { redirect } from 'next/navigation';

export const addGeneralData = async (formData) => {
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

export const delGeneralData = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDB();
    await General.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to delete Data!');
  }
  revalidatePath('/dashboard/');
};

export const addDataManage = async (formData) => {
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

export const delDataManage = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDB();
    await DataManagement.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to delete Data!');
  }
  revalidatePath('/dashboard/datapages');
};

export const addProjects = async (formData) => {
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

export const delProjects = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDB();
    await Projects.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to delete Data!');
  }
  revalidatePath('/dashboard/projects');
};
