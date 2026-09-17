import type { Set } from '../Workout/WorkoutModel';

export interface WorkoutTemplate {
	id: string;
	name: string;
	description: string;
	sets: Set[];
}
