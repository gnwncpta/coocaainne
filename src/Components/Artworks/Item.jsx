import "tailwindcss/tailwind.css";
import arrow from "../../assets/arrow.svg";

export default function Item(props){
    const { artwork, name, date } = props.design;

    return (
        <div className="border border-white border-opacity-20">
            <img src={artwork} alt={artwork} width="330px" />

            <div className="w-10/12	mx-auto py-5 border-b border-white border-opacity-20">
                <h2 className="text-white text-xl font-medium">{name}</h2>
                <p className="text-sm text-gray-400">Created at {date}</p>
            </div>

            <button className="group flex items-center mx-7 my-2 py-2 text-sm text-gray-400 hover:text-white">
                <p className="">View Artwork</p>
                <img src={arrow} alt="arrow" width="22px" className="ml-4 hidden group-hover:inline-block"/>
            </button>
        </div>
    )
}