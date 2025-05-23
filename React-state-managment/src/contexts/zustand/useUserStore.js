import { create } from 'zustand';


export const useUserStore = create((set) => ({
    user: null,
    login: (name, email) => set({ user: { name:"pedro", email:"pedro@gmail.com" } }),
    logout: () => set({ user: null }),
}));