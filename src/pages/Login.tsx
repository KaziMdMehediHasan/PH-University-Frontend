import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form"
import { authApi } from "../redux/Features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/Features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: 'A-0001',
            password: 'admin123'
        }
    });
    const [login] = authApi.useLoginMutation();

    // console.log('data =>', data);
    // console.log('error =>', error);

    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading('Logging in');
        try {
            const userInfo = {
                id: data.userId,
                password: data.password
            }
            const res = await login(userInfo).unwrap();

            const user = verifyToken(res.data.accessToken) as TUser;
            // console.log(user);
            dispatch(setUser({ user, token: res.data.accessToken }));
            navigate(`/${user.role}/dashboard`);
            toast.success('Logged in successfully', { id: toastId, duration: 3000 });
        } catch (error) {
            toast.error(`${error.data.message}`, { id: toastId, duration: 3000 });
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" {...register('userId')} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" {...register('password')} />
            </div>
            <Button htmlType="submit">Login</Button>
        </form>
    )
}
