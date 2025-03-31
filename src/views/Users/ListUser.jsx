import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "../HOC/withRouter";
class ListUser extends React.Component {
    // componentDidMount() {
    //     axios.get("https://reqres.in/api/users?page=2")
    //         .then((response) => {
    //             console.log(response.data.data);
    //         });
    // }
    state = {
        users: [],
    };
    async componentDidMount() {
        let response = await axios.get("https://reqres.in/api/users?page=2");
        console.log(response.data.data)
        this.setState({
            users: response && response.data && response.data.data ? response.data.data : [],
        });
    }
    handleViewUserDetails = (userId) => {
        this.props.navigate(`/users/${userId}`);
    }
    render() {
        let { users } = this.state;
        return (
            <div className="List-User-Container">
                <div className="title">
                    fetching data from API
                </div>
                <div className="content">
                    {users && users.length > 0 &&
                        users.map((item, index) => {
                            return (
                                <div className="child" key={item.id}
                                    onClick={() => this.handleViewUserDetails(item.id)}
                                >
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}
let ListUserWithRouter = withRouter(ListUser);
export default ListUserWithRouter;