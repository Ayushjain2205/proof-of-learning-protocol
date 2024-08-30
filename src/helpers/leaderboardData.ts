// leaderboardData.ts
export interface LeaderboardEntry {
  id: number;
  name: string;
  trophies: number;
  badges: number;
  streak: number;
}

export interface LeaderboardData {
  learners: LeaderboardEntry[];
  teachers: LeaderboardEntry[];
  contributors: LeaderboardEntry[];
}

export const leaderboardData: LeaderboardData = {
  learners: [
    { id: 1, name: "Alex", trophies: 2545, badges: 7, streak: 142 },
    { id: 2, name: "Emma", trophies: 2532, badges: 5, streak: 89 },
    { id: 3, name: "Michael", trophies: 2521, badges: 9, streak: 203 },
    { id: 4, name: "Olivia", trophies: 2508, badges: 3, streak: 56 },
    { id: 5, name: "William", trophies: 2495, badges: 6, streak: 178 },
    { id: 6, name: "Sophia", trophies: 2481, badges: 8, streak: 225 },
    { id: 7, name: "James", trophies: 2470, badges: 4, streak: 98 },
    { id: 8, name: "Ava", trophies: 2457, badges: 7, streak: 167 },
    { id: 9, name: "Benjamin", trophies: 2442, badges: 5, streak: 134 },
    { id: 10, name: "Mia", trophies: 2429, badges: 9, streak: 289 },
    { id: 11, name: "Ethan", trophies: 2416, badges: 2, streak: 45 },
    { id: 12, name: "Charlotte", trophies: 2403, badges: 6, streak: 201 },
    { id: 13, name: "Daniel", trophies: 2389, badges: 8, streak: 176 },
    { id: 14, name: "Amelia", trophies: 2375, badges: 4, streak: 112 },
    { id: 15, name: "Henry", trophies: 2361, badges: 7, streak: 156 },
  ],
  teachers: [
    { id: 1, name: "Isabella", trophies: 3045, badges: 12, streak: 365 },
    { id: 2, name: "Liam", trophies: 3032, badges: 10, streak: 298 },
    { id: 3, name: "Zoe", trophies: 3021, badges: 11, streak: 267 },
    { id: 4, name: "Noah", trophies: 3008, badges: 9, streak: 234 },
    { id: 5, name: "Ava", trophies: 2995, badges: 13, streak: 289 },
    { id: 6, name: "Ethan", trophies: 2981, badges: 14, streak: 312 },
    { id: 7, name: "Lily", trophies: 2970, badges: 8, streak: 198 },
    { id: 8, name: "Mason", trophies: 2957, badges: 12, streak: 267 },
    { id: 9, name: "Chloe", trophies: 2942, badges: 11, streak: 234 },
    { id: 10, name: "Oliver", trophies: 2929, badges: 15, streak: 389 },
    { id: 11, name: "Sophie", trophies: 2916, badges: 9, streak: 145 },
    { id: 12, name: "Lucas", trophies: 2903, badges: 13, streak: 301 },
    { id: 13, name: "Harper", trophies: 2889, badges: 10, streak: 276 },
    { id: 14, name: "Aiden", trophies: 2875, badges: 14, streak: 212 },
    { id: 15, name: "Ella", trophies: 2861, badges: 12, streak: 256 },
  ],
  contributors: [
    { id: 1, name: "Evelyn", trophies: 3216, badges: 15, streak: 445 },
    { id: 2, name: "Jackson", trophies: 3203, badges: 14, streak: 401 },
    { id: 3, name: "Aria", trophies: 3189, badges: 16, streak: 376 },
    { id: 4, name: "Logan", trophies: 3175, badges: 13, streak: 312 },
    { id: 5, name: "Scarlett", trophies: 3161, badges: 17, streak: 356 },
    { id: 6, name: "Carter", trophies: 3147, badges: 18, streak: 423 },
    { id: 7, name: "Luna", trophies: 3136, badges: 12, streak: 298 },
    { id: 8, name: "Owen", trophies: 3123, badges: 15, streak: 367 },
    { id: 9, name: "Layla", trophies: 3108, badges: 14, streak: 334 },
    { id: 10, name: "Sebastian", trophies: 3095, badges: 19, streak: 489 },
    { id: 11, name: "Penelope", trophies: 3082, badges: 13, streak: 245 },
    { id: 12, name: "Caleb", trophies: 3069, badges: 16, streak: 401 },
    { id: 13, name: "Nora", trophies: 3055, badges: 18, streak: 376 },
    { id: 14, name: "Ezra", trophies: 3041, badges: 14, streak: 312 },
    { id: 15, name: "Aurora", trophies: 3027, badges: 17, streak: 356 },
  ],
};
