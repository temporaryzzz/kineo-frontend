import { axiosInstance } from '@/data/shared/http';
import type { Program } from './ProgramModel';

export async function getPrograms(): Promise<Program[]> {
  const response = await axiosInstance.get('/programs');

  return response.data;
}

export async function createProgram(body: Omit<Program, 'id'>): Promise<Program> {
  const response = await axiosInstance.post('/programs', body);

  return response.data;
}

export async function updateProgram(body: Program): Promise<Program> {
  const response = await axiosInstance.patch(`/programs/${body.id}`, body);

  return response.data;
}

export async function deleteProgram(programId: string): Promise<string> {
  const response = await axiosInstance.delete(`/programs/${programId}`, {
    data: { programId: programId },
  });

  return response.data;
}
