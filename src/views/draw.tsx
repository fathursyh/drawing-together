import { useParams } from "react-router";
import Canvas from "../components/draw/Canvas";
import { useEffect, useRef, useState } from "react";

export default function DrawView() {
    const { id } = useParams();
    const [windowSize, setWindowSize] = useState<number | undefined>(0);
    const parentRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            if (entries[0]) {
                setWindowSize(entries[0].contentRect.width);
            }
        });

        if (parentRef.current) observer.observe(parentRef.current);

        return () => observer.disconnect();
    }, []);
    console.log(id);
    return (
        <section ref={parentRef} className="container-xl">
            <Canvas parentSize={windowSize} />
        </section>
    );
}
