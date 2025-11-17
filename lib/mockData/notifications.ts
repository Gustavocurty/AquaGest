export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "warning" | "success" | "error";
  date: string;
  read: boolean;
}

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "notif-1",
    title: "Meta atingida!",
    message: "Você atingiu sua meta de consumo semanal",
    type: "success",
    date: "2025-01-15T10:30:00",
    read: false
  },
  {
    id: "notif-2",
    title: "Consumo elevado",
    message: "Seu consumo de hoje está 30% acima da média",
    type: "warning",
    date: "2025-01-16T14:20:00",
    read: false
  },
  {
    id: "notif-3",
    title: "Novo problema reportado",
    message: "Vazamento detectado foi registrado com sucesso",
    type: "info",
    date: "2025-01-14T09:15:00",
    read: true
  },
  {
    id: "notif-4",
    title: "Manutenção programada",
    message: "Sistema em manutenção dia 20/01",
    type: "info",
    date: "2025-01-12T08:00:00",
    read: true
  }
];
