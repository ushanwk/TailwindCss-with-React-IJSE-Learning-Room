import {Component} from "react";
import logo from "../../image/instagram.png";

export class Navbar extends Component {
    render() {
        return (
            <>
                <div className="bg-blue-400 bg-gradient-to-r from-blue-600 p-3 flex">
                    <img src={logo} className="w-10"/>
                    <h1 className="mx-auto text-white font-bold m-2">This is NavBar</h1>
                </div>
            </>
        );
    }
}