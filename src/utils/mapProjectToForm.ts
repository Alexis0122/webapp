import { CreateProjectForm, Project } from "@/types/Project";


export function mapProjectToForm(project: Project): CreateProjectForm {
  return {
    title: project.title,
    description: '', // Valor predeterminado (puedes reemplazarlo si tienes más información)
    startDate: new Date(), // Valor predeterminado
    endDate: new Date(), // Valor predeterminado
    status: undefined, // Valor predeterminado
    financialTarget: project.financialTarget,
    equity: null, // Valor predeterminado
    images: [], // Puedes agregar lógica para convertir imageUrl a un arreglo de archivos si es necesario
    gratifications: undefined, // Valor predeterminado
  };
}
