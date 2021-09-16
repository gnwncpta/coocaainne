import "tailwindcss/tailwind.css";

export default function Item(props){
    const { artwork, name } = props.design;

    return (
        <div className="border border-white border-opacity-20">
            <img src={artwork} alt={artwork} width="330px" />
            <div className="py-4">
                <h2 className="text-white px-7 text-xl font-medium">{name}</h2>
                <p className="text-white px-7 text-sm text-gray-400">Created at 1 May 2020</p>
            </div>
        </div>
    )
}