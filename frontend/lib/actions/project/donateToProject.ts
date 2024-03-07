'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

interface donationForm {
  amount: number;
}

export async function donateToProject(
  projectId: number,
  formData: donationForm,
  token: string
) {
  try {
    const response = await fetch(
      `${process.env.API_URL}/projects/donate/${projectId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...formData }),
      }
    );
    const result = response;
    if (result.status === 201) {
      revalidatePath('/(pages)/(main)/project/[id]', 'layout');
      revalidateTag('allProjects');
      return result;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}
