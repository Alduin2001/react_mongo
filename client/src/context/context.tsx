import React, { createContext, useState, useEffect, ReactNode, FC } from "react";
import RootStore from "../stores/rootStore";

// Создаем контекст для хранилища
export const StoreContext = createContext<RootStore | undefined>(undefined);

// Создаем контекст для аутентификации
const AuthContext = createContext({
    isAuth: false,
    setAuth: (auth: boolean) => {},
});

interface StoreProviderProps {
    children: ReactNode;
}

// Создаем провайдер для хранилища
export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
    const rootStore = new RootStore();
    
    return (
        <StoreContext.Provider value={rootStore}>
            {children}
        </StoreContext.Provider>
    );
};