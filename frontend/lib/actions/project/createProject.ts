'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { project } from './getProjectById';

interface createProjectForm {
  title: string;
  description: string;
  image: string;
  goalAmount: number;
  categoryType: string;
  endDate: string;
}

export async function createProject(
  formData: createProjectForm,
  token: string
) {
  try {
    const response = await fetch(`${process.env.API_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({ ...formData }),
    });
    const result: project = await response.json();
    if (result) {
      revalidatePath(`/project/${result.id}`, 'layout');
      revalidateTag('allProjects');
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}
