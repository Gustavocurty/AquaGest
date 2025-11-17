export interface ConsumptionRecord {
  id: string;
  date: string;
  amount: number;
  unit: string;
  type: string;
}

export const MOCK_CONSUMPTION_DATA: ConsumptionRecord[] = [
  { id: "1", date: "2025-01-10", amount: 1250, unit: "L", type: "Residencial" },
  { id: "2", date: "2025-01-11", amount: 980, unit: "L", type: "Residencial" },
  { id: "3", date: "2025-01-12", amount: 1450, unit: "L", type: "Residencial" },
  { id: "4", date: "2025-01-13", amount: 1100, unit: "L", type: "Residencial" },
  { id: "5", date: "2025-01-14", amount: 1350, unit: "L", type: "Residencial" },
  { id: "6", date: "2025-01-15", amount: 1200, unit: "L", type: "Residencial" },
  { id: "7", date: "2025-01-16", amount: 1500, unit: "L", type: "Residencial" },
];

export const getWeeklyConsumption = () => {
  return MOCK_CONSUMPTION_DATA.slice(-7);
};

export const getTodayConsumption = () => {
  return MOCK_CONSUMPTION_DATA[MOCK_CONSUMPTION_DATA.length - 1];
};

export const getAverageConsumption = () => {
  const total = MOCK_CONSUMPTION_DATA.reduce((sum, record) => sum + record.amount, 0);
  return Math.round(total / MOCK_CONSUMPTION_DATA.length);
};
