export interface AppContextType {
    room: {
        id: string,
        name: string
    };
    changeRoom: (value: { id: string, name: string }) => void;
}