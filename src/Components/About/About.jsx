import { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css";

// Assets
import me from '../../assets/Me.svg';

export default function About(props){

    useEffect(() => {
        window.document.title = "CCO's Profile";
        return () => window.document.title = "COOCAAINNE";
    });

    const [ desc, setDesc ] = useState('');

    function GraphicDesignHandler(){
        const theDesc = <p className="px-2 lg:px-14 text-white text-sm">Hi! my name is Muhammad Gunawan Cipta Negara<br/>
        I’ve been doing graphic design since 2 years ago.
        <br />
        <br />
        if you don’t know my instagram, you can click that follow button
        i made cool stuff there</p>

        setDesc(theDesc);
    }

    function UIDesignHandler(){
        const theDesc = <p className="px-2 lg:px-14 text-white text-sm">After i create this site i need to design the web before get jump into code.<br /><br />
        The tools that i used is: Figma</p>

        setDesc(theDesc);
    }

    function FrontEndDevHandler(){
        const theDesc = <p className="px-2 lg:px-14 text-white text-sm">After designing the page i need to slicing the design into web page.<br /><br />
        The tools for helping me developing are: <br /><br /> ( ReactJS ) for helping me structure the code, <br /> ( Tailwind CSS ) for helping me styling the page</p>

        setDesc(theDesc);
    }

    return (
        <div className="bg-darkcco h-screen">
            <div className="h-600 flex flex-col justify-start lg:justify-center items-center mx-8 lg:mx-32">

                <div className="w-full lg:w-700 flex flex-col items-center">
                    <div className="w-full lg:px-14 profile-top flex items-center justify-between md:w-400 md:justify-around">
                        <img src={me} alt="My self" width="200px" className="w-120 mr-4 md:w-150 lg:w-200 lg:mr-10" />

                        <div>
                            <p className="text-sm text-white font-light">Hi! People know me as</p>
                            <a href="https://instagram.com/coocaainne" target="_blank" rel="noreferrer" className="my-2 text-xl lg:text-3xl text-white font-bold hover:underline">@COOCAAINNE</a>

                            <div className="flex flex-col items-start lg:flex-row lg:items-center justify-center my-5">
                                <p className="w-full text-gray-500 text-left font-light text-sm mr-4">Graphic Designer</p>
                                <p className="w-full text-gray-500 text-left font-light text-sm mr-4">Front End Dev</p>
                                <p className="w-full text-gray-500 text-left font-light text-sm">UI Designer</p>
                            </div>

                            <div className="flex items-center">
                                <a href="https://instagram.com/coocaainne" className="py-2 px-4 md:px-6 lg:px-8 bg-blue-500 text-sm font-medium text-white rounded-md mr-2" onClick={() => window.location.href="https://instagram.com/coocaainne"}>Follow</a>
                                <a href="mailto:gnwncpta@gmail.com" className="py-2 px-4 md:px-6 lg:px-8 bg-transparent border border-gray-400 text-sm text-gray-400 rounded-md hover:text-black hover:bg-white hover:border-transparent">Email</a>
                            </div>
                        </div>
                    </div>

                    <div className="profile-down w-full h-100 mt-20 md:w-500">
                        <div className="px-2 lg:px-14 flex items-center justify-between">
                            <button className="py-4 px-3 text-white text-center lg:text-center text-sm w-full border-b border-opacity-0 focus:border-white focus:border-opacity-40" onClick={GraphicDesignHandler}>Graphic Design</button>
                            <button className="py-4 px-3 text-white text-center lg:text-center text-sm w-full border-b border-opacity-0 focus:border-white focus:border-opacity-40" onClick={UIDesignHandler}>UI Design</button>
                            <button className="py-4 px-3 text-white text-center lg:text-center text-sm w-full border-b border-opacity-0 focus:border-white focus:border-opacity-40" onClick={FrontEndDevHandler}>Front End Dev</button>
                        </div>

                        <div className="mt-10">
                            {desc}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}