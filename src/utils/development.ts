import { devtools } from "zustand/middleware";


// в режиме development будем оборачивать функцию создания store в devtools, чтобы в расширении Redux можно было мониторить state
export function appDevtools(store: any) { 
    if (process.env.NODE_ENV !== 'development') {
        return devtools(store);
    } else {
        return store;
    }
}