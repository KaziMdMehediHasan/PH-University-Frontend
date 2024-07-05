import { Button } from "antd";
import { useForm } from "react-hook-form"
import { authApi } from "../redux/Features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/Features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

export const Login = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: 'A-0001',
            password: 'admin123'
        }
    });
    const [login, { error }] = authApi.useLoginMutation();

    // console.log('data =>', data);
    // console.log('error =>', error);

    const onSubmit = async (data) => {
        const userInfo = {
            id: data.userId,
            password: data.password
        }
        const res = await login(userInfo).unwrap();

        const user = verifyToken(res.data.accessToken);
        // console.log(user);
        dispatch(setUser({ user, token: res.data.accessToken }));
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
