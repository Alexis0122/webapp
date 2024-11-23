// src/hooks/useProjects.ts
// import { useQuery } from '@tanstack/react-query';
import { apiService } from '@/lib/axios';
import { PROJECT_ENDPOINT } from '@/constants';
import { ProjectData } from '@/types/Project';
import { useEffect, useState } from 'react';

export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectData[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await apiService.get<ProjectData[]>(PROJECT_ENDPOINT);
        setProjects(data);
      } catch (err) {
        setError(err as Error);
      }
    };

    fetchProjects();
  }, []);

  return { projects, error };
};