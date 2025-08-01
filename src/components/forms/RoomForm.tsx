import { useContext, useRef } from "react";
import Input from "../UI/Input";
import { AppContext } from "../../stores/appContext";
import type { AppContextType } from "../../contexts/AppContext";

export default function RoomForm() {
    const { changeRoom } = useContext(AppContext) as AppContextType;
    const roomRef = useRef<HTMLInputElement>(null);
    const handleSubmit = () => {
        const room = roomRef.current?.value ?? '';
        changeRoom({ id: 'tes', name: room });
    }
    return (
        <form className="p-2" action={handleSubmit}>
            <Input ref={roomRef} inputId="class" label="Room Name" />
            <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
    )
}