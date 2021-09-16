import 'tailwindcss/tailwind.css';
import me from '../../assets/Image.svg';

export default function Home(props){
    return (
        <div className="bg-black mx-auto h-900 flex items-center">
            <div className="w-full mx-32 flex items-center justify-between"> 

                <div className="typography mx-20 relative">
                    <div className="z-10 relative">
                        <h1 className="text-white text-7xl font-light mb-7 leading-tight"><span className="text-black">W</span>elcome to<br />Koken Crib</h1>
                        <p className="text-white mb-7 font-light text-sm">What's good man ? Take a time to explore my crib.<br />Are you a dev ? </p>

                        <div className="buttons">
                            <button className="py-2 px-10 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Explore</button>
                            <button className="py-2 px-10 text-white">Download My VC</button>
                        </div>
                    </div>

                    <div className="rounded-full w-24 h-24 bg-cco absolute -top-1.5 -left-4"></div>
                </div>

                <img alt="me" src={me} className="mx-20" />

            </div>
        </div>
    )
}