import { createContext } from "react";

export const AppContext = createContext({
    room: {
        id: '',
        name: '',
    }
});
