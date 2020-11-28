export interface Task {
  id?: number;
  project_id: number;
  description: string;
  completed?: boolean;
  created_at?: string;
  updated_at?: string;
}
