import {Component} from "react";
import logo from "../../image/instagram.png";

export class Navbar extends Component {
    render() {
        return (
            <>
                <div className="bg-blue-400 bg-gradient-to-r from-blue-600 p-3 flex">
                    <img src={logo} className="w-6 h-6 mt-2"/>
                    <h1 className="mx-auto text-white font-bold m-2">This is NavBar</h1>
                    <button className="bg-blue-50 pl-2 pr-2 border-2 border-white rounded-[8px] text-blue-400">Sign In</button>
                </div>
            </>
        );
    }
}