import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import type { UsersStoreProps, UserProps } from "./types";

export const useUsersStore = create<UsersStoreProps>()(devtools(immer((set, get) => ({
    users: [],
    isLoading: false,
    errors: "",
    currentUser: {
        id: 1,
        email: "admin@admin.com",
        password: "1234567",
        role: "admin",
        fio: "Александр"
    },
    actions: {
        fetchUsers: async () => {
            set({ isLoading: true });
            try {
                const result = await fetch('/data/testUsers.json');
                const json = await result.json() as UserProps[];
                set({ users: json });
            } catch(e) {
                set({ errors: e.message });
                console.log(e);
            } finally {
                set({ isLoading: false });
            }
        },
    }
}))));