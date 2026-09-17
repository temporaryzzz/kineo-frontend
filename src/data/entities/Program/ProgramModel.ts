import type { WorkoutTemplate } from '../WorkoutTemplate/WorkoutTemplateModel';

export type ProgramType = 'weeks' | 'interval' | 'month';

export interface Program {
  id: string;
  name: string;
  description: string;
  type: ProgramType;
  workoutTemplates: WorkoutTemplate[];
  startDate: string;
  endDate?: string;
}
