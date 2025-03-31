import { useNavigate } from "react-router-dom";

export const withRouter = (Component) => {
    return (props) => {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}; 