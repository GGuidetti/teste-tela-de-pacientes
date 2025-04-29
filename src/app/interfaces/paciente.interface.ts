export interface Paciente {
    [key: string]: any;
    initials: string;
    name: string;
    status: "Ativo" | "Inativo";
    diagnosis: string;
    medication: string;
    healthProvider: string;
    lastRequest: string;
    color: string;
    showStatusDropdown: boolean;
  }