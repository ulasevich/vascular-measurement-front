export type UserRole = "admin" | "doctor";

export type UserProps = {
    id: number,
    email: string,
    password: string,
    role: UserRole,
    fio?: string,
};

export type UsersStoreProps = {
    users: UserProps[],
    isLoading: boolean,
    errors: unknown,
    currentUser: UserProps,
    actions: {
        fetchUsers: () => void,
    }
};