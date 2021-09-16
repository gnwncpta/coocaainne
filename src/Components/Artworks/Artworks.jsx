import { useState } from "react";
import "tailwindcss/tailwind.css";
import sort from '../../assets/sort-solid.svg';

// Assets
import artwork1 from '../../assets/artworks/1.svg';
import artwork2 from '../../assets/artworks/2.svg';
import artwork3 from '../../assets/artworks/3.svg';
import artwork4 from '../../assets/artworks/4.svg';
import artwork5 from '../../assets/artworks/5.svg';
import artwork6 from '../../assets/artworks/6.svg';
import artwork7 from '../../assets/artworks/7.svg';
import artwork8 from '../../assets/artworks/8.svg';
import artwork9 from '../../assets/artworks/9.svg';
import artwork10 from '../../assets/artworks/10.svg';
import artwork11 from '../../assets/artworks/11.svg';
import artwork12 from '../../assets/artworks/12.jpg';
import artwork13 from '../../assets/artworks/13.jpg';

// Components
import SortMenu from "./SortMenu";
import Item from "./Item";

export default function Artworks(props){

    const [ showSortMenu, setShowSortMenu ] = useState(false);
    const [ oldest, setOldest ] = useState(false);
    const assetsCollection = [ 
        { artwork: artwork13, name: "PERSIAN" }, 
        { artwork: artwork12, name: "BLOND"}, 
        { artwork: artwork1, name: "SEX" }, 
        { artwork: artwork2, name: "Retro" }, 
        { artwork: artwork3, name: "Humble" }, 
        { artwork: artwork4, name: "JAPAN" }, 
        { artwork: artwork5, name: "CONSPIRARE" }, 
        { artwork: artwork6, name: "HENTAI" }, 
        { artwork: artwork7, name: "Virtual" }, 
        { artwork: artwork8, name: "LOL"}, 
        { artwork: artwork9, name: "Statue" }, 
        { artwork: artwork10, name: "Retro High" }, 
        { artwork: artwork11, name: "Arpanet"} 
    ];

    function oldestSort(){
        let oldest = [];

        for(let i = assetsCollection.length; i > 0; i--){
            oldest.push(assetsCollection[i]);
        }

        return oldest.map((artwork, index) => {
            return <img key={index+1} src={artwork.artwork} alt="artwork" width="330px" className="hover:border hover:border-gray-700" />
        });
    }

    function newestSort(){
        return assetsCollection.map((artwork, index) => {
            return <Item design={artwork} />
        });
    }

    function ArtworksHandler(){
        if(showSortMenu){
            setShowSortMenu(false);
        }
    }

    return (
        <div className="bg-black h-max" onClick={ArtworksHandler}>
            <div className="mx-32">

                <div className="flex items-center justify-between border-b border-white bg-black">
                    <div className="py-5">
                        <h1 className="text-white text-2xl font-medium">Artworks</h1>
                        <p className="text-white text-sm font-light">Recent Artworks</p>
                    </div>

                    <p className="text-white text-sm">Created by <a href="https://instagram.com/coocaainne" target="_blank" rel="noreferrer" className="hover:underline">@coocaainne</a></p>
                </div>

                <div className="py-6 ">
                    <div>
                        <button className="flex items-center py-3 px-4 text-white border-b-0 rounded-lg hover:bg-darkcco" onClick={() => setShowSortMenu(showSortMenu ? false : true)}>
                            <img src={sort} width="12px" alt="sort_icon" className="mr-2"/>
                            Filter artworks
                        </button>
                    </div>

                    <SortMenu show={showSortMenu} setOldest={setOldest} setShowSortMenu={setShowSortMenu} />
                </div>


                <div className="grid grid-cols-3 gap-12 justify-items-center py-10">
                    { oldest ? oldestSort() : newestSort() }
                </div>

            </div>
        </div>
    )
}