import React from "react";

class SplitComponent extends React.Component {
    state = {
        fname: '',
        lname: '',
        age: ''
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.fname || !this.state.lname || !this.state.age) {
            alert('Please fill in all fields');
            return;
        }
        console.log(`this.state`, this.state);
        this.props.addNewIdentity(this.state);
        this.setState({
            fname: '',
            lname: '',
            age: ''
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="fname">First name:</label><br />
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={this.state.fname}
                    onChange={this.handleChange}
                /><br />

                <label htmlFor="lname">Last name:</label><br />
                <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={this.state.lname}
                    onChange={this.handleChange}
                /><br />

                <label htmlFor="age">Age:</label><br />
                <input
                    type="text"
                    id="age"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                /><br />

                <button type="submit">Submit</button>
            </form>

        )

    }
}
export default SplitComponent;