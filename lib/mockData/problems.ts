export interface Problem {
  id: string;
  title: string;
  description: string;
  type: string;
  status: "Pendente" | "Em Análise" | "Resolvido";
  date: string;
  userId: string;
  userName: string;
  image?: string;
  location?: string;
}

export const MOCK_PROBLEMS: Problem[] = [
  {
    id: "prob-1",
    title: "Vazamento no banheiro",
    description: "Vazamento constante na torneira do banheiro",
    type: "Vazamento",
    status: "Pendente",
    date: "2025-01-16T10:00:00",
    userId: "user-1",
    userName: "Gustavo Curty",
    image: "/water-leak.png",
    location: "Banheiro"
  },
  {
    id: "prob-2",
    title: "Pressão baixa",
    description: "Pressão da água muito baixa no chuveiro",
    type: "Pressão",
    status: "Em Análise",
    date: "2025-01-15T14:30:00",
    userId: "user-1",
    userName: "Gustavo Curty",
    location: "Chuveiro"
  },
  {
    id: "prob-3",
    title: "Água com cor estranha",
    description: "Água saindo amarelada da torneira",
    type: "Qualidade",
    status: "Resolvido",
    date: "2025-01-10T09:00:00",
    userId: "user-1",
    userName: "Gustavo Curty",
    location: "Cozinha"
  }
];
