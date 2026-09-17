import { axiosInstance } from '@/data/shared/http';
import type { Exercise } from './ExerciseModel';

export async function getExercises(): Promise<Exercise[]> {
  const response = await axiosInstance.get('/exercises');

  return response.data;
}

export async function createExercise(body: Omit<Exercise, 'id'>): Promise<Exercise> {
  const response = await axiosInstance.post('/exercises', body);

  return response.data;
}

export async function updateExercise(body: Exercise): Promise<Exercise> {
  const response = await axiosInstance.post('/exercises', body);

  return response.data;
}

export async function deleteExercise(exerciseId: string): Promise<string> {
  const response = await axiosInstance.delete('/exercises', {
    data: { exerciseId },
  });

  return response.data;
}
