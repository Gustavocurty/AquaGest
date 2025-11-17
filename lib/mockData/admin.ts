export interface AdminStats {
  totalUsers: number;
  totalCompanies: number;
  totalConsumption: number;
  systemHealth: number;
}

export const MOCK_ADMIN_DATA: AdminStats = {
  totalUsers: 1250,
  totalCompanies: 28,
  totalConsumption: 1450000,
  systemHealth: 98
};

export const MOCK_ADMIN_USERS = [
  {
    id: "user-1",
    name: "Gustavo Curty",
    email: "gustavo@gmail.com",
    role: "user",
    company: "Empresa ABC",
    consumption: 1200,
    status: "Ativo"
  },
  {
    id: "user-2",
    name: "Maria Silva",
    email: "maria@empresa.com",
    role: "company",
    company: "Empresa XYZ",
    consumption: 8500,
    status: "Ativo"
  },
  {
    id: "user-3",
    name: "João Santos",
    email: "joao@admin.com",
    role: "admin",
    company: "Admin",
    consumption: 0,
    status: "Ativo"
  }
];

export const MOCK_ADMIN_CHART_DATA = [
  { month: "Jul", consumption: 1200000 },
  { month: "Ago", consumption: 1350000 },
  { month: "Set", consumption: 1280000 },
  { month: "Out", consumption: 1420000 },
  { month: "Nov", consumption: 1390000 },
  { month: "Dez", consumption: 1450000 }
];
