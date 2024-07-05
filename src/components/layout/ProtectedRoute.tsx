import { ReactNode } from "react"
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/Features/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    // accessing the token
    // const { token } = useAppSelector((state) => state.auth);
    const token = useAppSelector(useCurrentToken);

    if (!token) {
        return <Navigate to="/login" replace={true} />
    }
    return children;
}

export default ProtectedRoute