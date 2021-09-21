import { useEffect } from "react";
import "tailwindcss/tailwind.css";

export default function ArchivedDesign(props){

    useEffect(() => {
        window.document.title = "Archived Design";

        return () => window.document.title = "COOCAAINNE";
    });

    return (
        <div className="bg-black h-full lg:h-screen">
            <div className="h-900 flex items-center justify-center mx-32">
                <h1 className="text-white text-lg">Page on Working!</h1>
            </div>
        </div>
    )
}