'use server';
import { revalidatePath } from 'next/cache';
import connectDB  from './utils';
import { DataManagement, General, Projects, User } from './models';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { signIn } from '../auth';

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
    // console.log(err);
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
    // console.log(err);
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
    // console.log(err);
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
    // console.log(err);
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
    // console.log(err);
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
    // console.log(err);
    throw new Error('Failed to delete Data!');
  }
  revalidatePath('/dashboard/projects');
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  // console.log(formData)
  // try {
  await signIn('credentials', { username, password });
  // } catch (err) {
  //   console.log(err);
  //   // revalidatePath('/dashboard');
  //   // redirect('/dashboard');
  //   return 'Failed to Login!';
  // }
};

export const addUser = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    connectDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();
  } catch (err) {
    // console.log(err);
    throw new Error('Failed to create user!');
  }

  revalidatePath('/');
  redirect('/');
};
