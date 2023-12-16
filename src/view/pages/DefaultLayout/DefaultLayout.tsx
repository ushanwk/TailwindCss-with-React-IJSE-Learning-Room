import React, {Component} from "react";
import {Navbar} from "../../common/Navbar/Navbar";
import {MainContent} from "../../common/MainContent/MainContent";
import {Footer} from "../../common/Footer/Footer";

export class DefaultLayout extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <MainContent/>
                <Footer/>
            </>
        );
    }
}