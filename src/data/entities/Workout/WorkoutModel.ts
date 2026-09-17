import type { Exercise } from '../Exercise/ExerciseModel';

export type WorkoutCompletion = 'full' | 'partially' | 'not_completed';

export interface Set {
  id: string;
  workoutTemplateId: string;
  workoutId?: string;
  exercise: Exercise;
  desiredValue: number;
  weight: number;
}

export interface SetDone {
  id: string;
  workoutId: string;
  type: string;
  name: string;
  completedValue: number;
  desiredValue: number;
  weight: number;
  completedType: WorkoutCompletion;
}

export interface Workout {
  id: string;
  userId: string;
  programId?: string;
  workoutTemplateId?: string;
  name: string;
  description: string;
  sets: Array<Set | SetDone>;
  date: string;
  startDate: string | undefined;
  endDate: string | undefined;
  isCompleted: WorkoutCompletion;
  isActive: boolean;
}
