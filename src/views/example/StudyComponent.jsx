import React from "react";
import ChildComponent from "./ChildComponent.jsx";
import SplitComponent from "./SplitComponent.jsx";

class StudyComponent extends React.Component {
    state = {
        userInfoList: [
            { fname: 'John', lname: 'Doe', age: 25 },
            { fname: 'Jane', lname: 'Smith', age: 30 },
            { fname: 'Alice', lname: 'Johnson', age: 22 }
        ],
        infoString: ""
    };

    addNewIdentity = (Identity) => {
        this.setState({
            userInfoList: [...this.state.userInfoList, Identity]
        });
    };
    deleteAIdentity = (Identity) => {
        let currentIdentity = this.state.userInfoList;
        currentIdentity = currentIdentity.filter((item) => item !== Identity);
        this.setState({
            userInfoList: currentIdentity
        });
    }

    render() {
        const { userInfoList } = this.state;
        return (
            <>
                <SplitComponent addNewIdentity={this.addNewIdentity} />

                <ChildComponent userInfoList={userInfoList}
                    deleteAIdentity={this.deleteAIdentity}
                />

                <div>
                    <h3>String of Info:</h3>
                    <p>
                        {userInfoList
                            .map((user) => `${user.fname} ${user.lname} (${user.age})`)
                            .join(", ")}
                    </p>
                </div>
            </>
        );
    }
}

export default StudyComponent;