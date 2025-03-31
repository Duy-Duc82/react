import React from "react";

class ChildComponent extends React.Component {
    state = {
        showInfo: false
    };

    handleShowHide = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    };
    handleOnclickDelete = (Info) => {
        this.props.deleteAIdentity(Info);
    }
    render() {
        const { userInfoList } = this.props;
        const { showInfo } = this.state;

        return (
            <div>
                {showInfo ? (
                    <>
                        <h3>Child Component</h3>
                        <ul>
                            {userInfoList.map((user, index) => (
                                <li key={index}>
                                    <p>Full Name: {user.fname} {user.lname}</p>
                                    <p>Age: {user.age}</p>
                                    &nbsp;
                                    <span onClick={() => this.handleOnclickDelete(user)}>X</span>
                                </li>
                            ))}
                        </ul>
                        <button onClick={this.handleShowHide}>Hide</button>
                    </>
                ) : (
                    <button onClick={this.handleShowHide}>Show</button>
                )}
            </div>
        );
    }
}

export default ChildComponent;