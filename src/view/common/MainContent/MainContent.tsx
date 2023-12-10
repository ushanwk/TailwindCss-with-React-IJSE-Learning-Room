import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "../../pages/Home/HomePage";
import {ContactPage} from "../../pages/Contact/ContactPage";
import {AboutPage} from "../../pages/About/AboutPage";

export class MainContent extends Component {
    render() {
        return (
            <>
                <div className="bg-blue-200 bg-gradient-to-r from-blue-50 pt-72 pb-72">

                    <h1 className="text-center text-blue-400 text-3xl font-bold">This is Main Content</h1>

                    <div className="mt-10 w-20 h-10 bg-blue-400 shadow-blue-200 shadow-xl hover:shadow-blue-300 mx-auto rounded-[8px]">
                        <h1 className="text-white font-bold pt-2 pl-5">Hello</h1>
                    </div>

                    <Routes>
                        <Route path="/" Component={HomePage}></Route>
                        <Route path="/contact" Component={ContactPage}></Route>
                        <Route path="/about" Component={AboutPage}></Route>
                    </Routes>

                </div>
            </>
        );
    }
}