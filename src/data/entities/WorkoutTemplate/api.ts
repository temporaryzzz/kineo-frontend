import { axiosInstance } from '@/data/shared/http';
import type { WorkoutTemplate } from './WorkoutTemplateModel';

export async function getWorkoutTemplates(): Promise<WorkoutTemplate[]> {
  const response = await axiosInstance.get('/workouts/templates');

  return response.data;
}

export async function updateWorkoutTemplate(body: WorkoutTemplate): Promise<WorkoutTemplate> {
  const response = await axiosInstance.post('/workouts/templates', body);

  return response.data;
}

export async function createWorkoutTemplate(
  body: Omit<WorkoutTemplate, 'id'>,
): Promise<WorkoutTemplate> {
  const response = await axiosInstance.post('/workouts/templates', body);

  return response.data;
}

export async function deleteWorkoutTemplate(workoutTemplateId: string): Promise<string> {
  const response = await axiosInstance.delete('/workouts/templates', {
    data: { workoutTemplateId: workoutTemplateId },
  });

  return response.data;
}
