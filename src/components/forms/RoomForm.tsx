import { useRef, type FormEventHandler } from "react";
import Input from "../UI/Input";
import { useNavigate } from "react-router";

export default function RoomForm() {
    const roomRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        const room = roomRef.current?.value ?? '';
        if (room === '') return;
        navigate(`/draw/${room.replace(' ', '-').toLowerCase()}`);
    };
    return (
        <form className="p-2" onSubmit={handleSubmit}>
            <Input ref={roomRef} inputId="class" label="Room Name" />
            <button type="submit" className="btn btn-primary w-100">
                Submit
            </button>
        </form>
    );
}
