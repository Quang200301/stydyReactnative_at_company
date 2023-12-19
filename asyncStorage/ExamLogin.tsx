import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

const createLogin = (set, get) => ({
  token: null,
  setToken: (newToken: any) => set({token: newToken}),
});
export const useStore = create(
  persist(
    (set, get) => ({
      ...createLogin(set, get),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
