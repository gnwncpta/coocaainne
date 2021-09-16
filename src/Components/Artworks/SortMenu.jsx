import 'tailwindcss/tailwind.css';

export default function SortMenu(props){

    const { show, setOldest, setShowSortMenu } = props;

    if(!show){
        return null;
    }

    function oldestHandler(){
        setOldest(true);
        setShowSortMenu(false);
    }

    function newestHandler(){
        setOldest(false);
        setShowSortMenu(false);
    }

    return (
        <div className="bg-darkcco my-4 py-4 w-64 rounded-lg absolute">
            <p className="py-4 px-6 text-white hover:bg-white hover:text-black cursor-pointer" onClick={oldestHandler}>Oldest</p>
            <p className="py-4 px-6 text-white hover:bg-white hover:text-black cursor-pointer" onClick={newestHandler}>Newest</p>
        </div>
    )
}