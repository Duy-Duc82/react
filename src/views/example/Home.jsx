import React from "react";
import Color from "../HOC/Color";
class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}
const ColoredHome = Color(Home);
export default ColoredHome;
