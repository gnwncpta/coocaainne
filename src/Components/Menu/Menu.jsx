import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import Home from '../Home/Home';
import Artworks from '../Artworks/Artworks';
import About from '../About/About';

// Assets
import logo from '../../assets/cco-logo.png';

export default function Menu(){
    return (
        <Router>
            <section className="mx-auto bg-black py-10">
                <header className="mx-32 text-white flex items-center justify-between">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} width="40px" className="cursor-pointer" alt="Logo" />
                        </Link>
                    </div>

                    <div>
                        <Link to="/artworks" className="py-2 px-6 mx-5 text-sm rounded-full hover:bg-white hover:text-black">Artworks</Link>
                        <Link to="/archived-design" className="py-2 px-6 mx-5 text-sm rounded-full hover:bg-white hover:text-black">Archived Design</Link>
                        <Link to="/design" className="py-2 px-6 mx-5 text-sm rounded-full hover:bg-white hover:text-black">Design</Link>
                    </div>

                    <Link to="/about" className="py-2 px-8 text-sm rounded-full hover:bg-cco hover:text-black">About</Link>
                </header>
            </section>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/artworks">
                    <Artworks />
                </Route>
                <Route path="/archived-design">
                    {/* <ArchivedDesign /> */}
                </Route>
                <Route path="/design">
                    {/* <Design /> */}
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    )
}