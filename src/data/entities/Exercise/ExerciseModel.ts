export type ExerciseType = 'time' | 'reps';

export interface Exercise {
  id: string;
  name: string;
  type: ExerciseType;
  muscleGroups: string[];
  isSystem: boolean;
  media?: Object;
}
