export interface CompanyStats {
  totalUsers: number;
  totalConsumption: number;
  activeProblems: number;
  averageConsumption: number;
  monthlyTrend: number;
}

export const MOCK_COMPANY_DATA: CompanyStats = {
  totalUsers: 45,
  totalConsumption: 52500,
  activeProblems: 8,
  averageConsumption: 1167,
  monthlyTrend: -12
};

export const MOCK_COMPANY_CONSUMPTION = [
  { date: "Seg", amount: 7200 },
  { date: "Ter", amount: 6800 },
  { date: "Qua", amount: 7500 },
  { date: "Qui", amount: 7100 },
  { date: "Sex", amount: 6900 },
  { date: "Sáb", amount: 5200 },
  { date: "Dom", amount: 4800 }
];

export const MOCK_COMPANY_PROBLEMS = [
  {
    id: "comp-prob-1",
    building: "Edifício A",
    problemCount: 3,
    urgent: 1
  },
  {
    id: "comp-prob-2",
    building: "Edifício B",
    problemCount: 2,
    urgent: 0
  },
  {
    id: "comp-prob-3",
    building: "Edifício C",
    problemCount: 3,
    urgent: 2
  }
];
