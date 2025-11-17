export interface Goal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  unit: string;
  startDate: string;
  endDate: string;
  status: "Ativa" | "Alerta" | "Expirada" | "Substituída";
  description: string;
}

export const MOCK_GOALS: Goal[] = [
  {
    id: "goal-1",
    title: "Reduzir consumo mensal",
    targetAmount: 3000,
    currentAmount: 3500,
    unit: "L",
    startDate: "2025-01-01",
    endDate: "2025-01-31",
    status: "Ativa",
    description: "Meta de redução de 20% no consumo de água"
  },
  {
    id: "goal-2",
    title: "Economia semanal",
    targetAmount: 800,
    currentAmount: 890,
    unit: "L",
    startDate: "2025-01-10",
    endDate: "2025-01-17",
    status: "Alerta",
    description: "Consumir menos de 800L por semana"
  },
  {
    id: "goal-3",
    title: "Meta de janeiro",
    targetAmount: 2500,
    currentAmount: 2800,
    unit: "L",
    startDate: "2024-12-01",
    endDate: "2024-12-31",
    status: "Expirada",
    description: "Meta do mês anterior"
  }
];
