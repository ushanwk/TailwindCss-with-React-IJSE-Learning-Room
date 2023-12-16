import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {ContactPage} from "../../pages/Contact/ContactPage";
import {AboutPage} from "../../pages/About/AboutPage";
import {DefaultLayout} from "../../pages/DefaultLayout/DefaultLayout";

export class MainContent extends Component {
    render() {
        return (
            <>
                <div className="bg-blue-200 bg-gradient-to-r from-blue-50 pt-72 pb-72">

                    <Routes>
                            <Route path="/" Component={DefaultLayout}></Route>
                            <Route path="/contact" Component={ContactPage}></Route>
                            <Route path="/about" Component={AboutPage}></Route>
                    </Routes>

                </div>
            </>
        );
    }
}