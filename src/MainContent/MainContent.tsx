import {Component} from "react";

export class MainContent extends Component {
    render() {
        return (
            <>
                <div className="bg-blue-200 bg-gradient-to-r from-blue-50 pt-72 pb-72">

                    <h1 className="text-center text-blue-400 text-3xl font-bold">This is Main Content</h1>

                    <div className="mt-10 w-20 h-20 bg-blue-400 shadow-blue-200 shadow-xl hover:shadow-blue-300 mx-auto">
                        <h1 className="text-white font-bold pt-7 pl-5">Hello</h1>
                    </div>

                </div>
            </>
        );
    }
}