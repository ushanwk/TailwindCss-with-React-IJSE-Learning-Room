import {Component} from "react";
import copyright from "../../image/copyright.png";

export class Footer extends Component {
    render() {
        return (
            <>
                <div className="bg-gray-400 bg-gradient-to-r from-gray-600 p-3 flex mx-auto justify-center">
                    <h1 className="text-center text-white font-bold">This is Footer</h1>
                    <img src={copyright} className="w-5 h-5 ml-3 mt-0.5"/>
                </div>
            </>
        );
    }
}