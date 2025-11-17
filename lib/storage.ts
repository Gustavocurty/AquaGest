// Local storage utilities for persisting data
export const storage = {
  // Auth
  getAuth: () => {
    if (typeof window === "undefined") return null;
    const auth = localStorage.getItem("aquagest_auth");
    return auth ? JSON.parse(auth) : null;
  },
  setAuth: (user: any) => {
    if (typeof window === "undefined") return;
    localStorage.setItem("aquagest_auth", JSON.stringify(user));
  },
  clearAuth: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem("aquagest_auth");
  },

  // Goals
  getGoals: () => {
    if (typeof window === "undefined") return null;
    const goals = localStorage.getItem("aquagest_goals");
    return goals ? JSON.parse(goals) : null;
  },
  setGoals: (goals: any[]) => {
    if (typeof window === "undefined") return;
    localStorage.setItem("aquagest_goals", JSON.stringify(goals));
  },

  // Problems
  getProblems: () => {
    if (typeof window === "undefined") return null;
    const problems = localStorage.getItem("aquagest_problems");
    return problems ? JSON.parse(problems) : null;
  },
  setProblems: (problems: any[]) => {
    if (typeof window === "undefined") return;
    localStorage.setItem("aquagest_problems", JSON.stringify(problems));
  },

  // Notifications
  getNotifications: () => {
    if (typeof window === "undefined") return null;
    const notifs = localStorage.getItem("aquagest_notifications");
    return notifs ? JSON.parse(notifs) : null;
  },
  setNotifications: (notifications: any[]) => {
    if (typeof window === "undefined") return;
    localStorage.setItem("aquagest_notifications", JSON.stringify(notifications));
  }
};
