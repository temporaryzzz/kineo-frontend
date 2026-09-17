import { axiosInstance } from '@/data/shared/http';
import type { Workout } from './WorkoutModel';

export async function getTodayWorkouts(date: string): Promise<Workout[]> {
  const response = await axiosInstance.get('/workouts', {
    params: { date },
  });

  return response.data;
}

export async function getWorkouts(
  monthCount: number,
  initialMonth: string,
): Promise<Workout[]> {
  const response = await axiosInstance.get('/workouts', {
    params: { monthCount, initialMonth },
  });

  return response.data;
}

export async function updateWorkout(body: Workout): Promise<Workout> {
  const response = await axiosInstance.post('/workouts', body);

  return response.data;
}

export async function createWorkout(body: Omit<Workout, 'id'>): Promise<Workout> {
  const response = await axiosInstance.post('/workouts', body);

  return response.data;
}

export async function completeWorkout(
  workoutId: string,
  endDate: string,
  isCompleted: Workout['isCompleted'],
): Promise<Workout> {
  const response = await axiosInstance.patch('/workouts', {
    workoutId,
    endDate,
    isCompleted,
  });

  return response.data;
}

export async function deleteWorkout(workoutId: string): Promise<string> {
  const response = await axiosInstance.delete('/workouts', {
    data: { workoutId },
  });

  return response.data;
}
