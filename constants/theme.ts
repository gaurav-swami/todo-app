// constants/theme.ts

export const COLOR_SCHEMES = {
  light: {
    background: "#F4F4F5",
    inputBg: "#FFFFFF",
    text: "#111827",
    border: "#D1D5DB",
    primary: "#777e93", // #77e93 #3B82F6
    completed: "#9CA3AF", // gray-400
  },
  dark: {
    background: "#05001E",
    inputBg: "#05001E",
    text: "#F8FAFC",
    border: "#334155",
    primary: "#afb9d4", // indigo-500 #777e93 #6366F1 #afb9d4 #91bdef #83b3e3
    completed: "#64748B",
    //", // slate-400 #f68623
  },
  ocean: {
    background: "#E0F2F1",
    inputBg: "#B2DFDB",
    text: "#004D40",
    border: "#26A69A",
    primary: "#00897B", // teal-600
    completed: "#4DB6AC",
  },
  sunset: {
    background: "#FFF7ED",
    inputBg: "#FFEEDB",
    text: "#7C2D12",
    border: "#FDBA74",
    primary: "#FB923C", // orange-400
    completed: "#FCD34D", // amber-300
  },
  rose: {
    background: "#FFF1F2",
    inputBg: "#FBCFE8",
    text: "#881337",
    border: "#F472B6",
    primary: "#EC4899", // pink-500
    completed: "#F9A8D4", // pink-300
  },
};

export type ThemeName = keyof typeof COLOR_SCHEMES;

export type Theme = {
  background: string;
  inputBg: string;
  text: string;
  border: string;
  primary: string;
  completed: string;
};
