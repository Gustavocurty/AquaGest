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
    title: "Vazamento na Calçada",
    description:
      "Cano estourado no passeio público em frente à residência, com grande desperdício de água.",
    type: "Vazamento Externo",
    status: "Pendente",
    date: "2025-01-16T10:00:00",
    userId: "user-1",
    userName: "Gustavo Curty",
    image: "/vazamento.jpg",
    location: "Rua das Acácias, 123 (Calçada)",
  },
  {
    id: "prob-2",
    title: "Falta de Abastecimento",
    description:
      "Residência sem receber água da rua há mais de 24 horas, mesmo sem aviso de corte.",
    type: "Abastecimento",
    status: "Em Análise",
    date: "2025-01-15T14:30:00",
    userId: "user-1",
    userName: "Gustavo Curty",
    location: "Bairro Jardim Central",
  },
  {
    id: "prob-3",
    title: "Água Turva/Suja",
    description:
      "Água chegando no hidrômetro com coloração marrom e sedimentos.",
    type: "Qualidade da Água",
    status: "Resolvido",
    date: "2025-01-10T09:00:00",
    userId: "user-1",
    userName: "Gustavo Curty",
    location: "Entrada do Cavalete",
  },
  {
    id: "prob-4",
    title: "Bueiro Transbordando",
    description:
      "Esgoto retornando pela tampa do bueiro na via pública com forte odor.",
    type: "Esgoto",
    status: "Pendente",
    date: "2025-01-17T08:15:00",
    userId: "user-1",
    userName: "Gustavo Curty",
    location: "Rua Principal (Esquina)",
  },
];
