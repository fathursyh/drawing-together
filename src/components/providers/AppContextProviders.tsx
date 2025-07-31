import { useState, type PropsWithChildren } from "react";
import { AppContext } from "../../stores/appContext";

export default function AppContextProvider({children} : PropsWithChildren) {
    const [roomState, setRoomState] = useState({
        id: '',
        name: '',
    });
    const appCtx = {
        room: roomState,
        changeRoom: (value: {id: string, name: string}) => {
            setRoomState(prevState => ({...prevState, ...value}));
        }
    };
    return (
        <AppContext value={appCtx}>
            {children}
        </AppContext>
    )
}