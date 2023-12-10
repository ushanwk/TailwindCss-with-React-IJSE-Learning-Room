import {Component} from "react";
import logo from "../../../image/instagram.png";
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <>
                <div className="bg-blue-400 bg-gradient-to-r from-blue-600 p-3 flex justify-between">
                    <img src={logo} className="w-6 h-6 mt-2"/>
                    <nav>
                        <ul className="flex mt-1">
                            <li className="pr-5 text-white">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="pr-5 text-white">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="pr-5 text-white">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className="hover:bg-blue-50 hover:text-blue-400 pl-2 pr-2 border-2 border-white rounded-[8px] bg-blue-400 text-white">Sign In</button>
                </div>
            </>
        );
    }
}