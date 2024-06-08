import React, { FC, useState, ChangeEvent, FormEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/context";
import { observer } from "mobx-react";

const Auth: FC = observer(() => {
    const [formData, setFormData] = useState({ login: '', password: '' });
    const rootStore = useContext(StoreContext);
    const navigate = useNavigate();
    const { userStore } = rootStore;

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = ev.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitForm = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const response = await userStore.authUser(formData);
        if (response && response.trim().length > 0) {
            navigate('/');
        } else {
            console.log('Error');
        }
    };

    return (
        <section className="w-4/5 mx-auto p-1 h-full">
            <form className="flex flex-col gap-1 w-full text-white" onSubmit={submitForm}>
                <h1>Авторизация</h1>
                <div className="flex flex-col gap-1">
                    <input type="text" name="login" className="w-full bg-transparent border-b-2 outline-none" value={formData.login} placeholder="Логин" onChange={handleChange} />
                    <input type="password" name="password" className="w-full bg-transparent border-b-2 outline-none" value={formData.password} placeholder="Пароль" onChange={handleChange} />
                    <div className="flex gap-1">
                        <input type="submit" className="bg-green-500 w-full p-1" value="Авторизоваться" />
                        <input type="button" className="bg-green-500 w-full p-1" value="Сбросить форму" />
                    </div>
                    <p>У вас нет аккаунта? <Link to="/auth">Зарегистрироваться</Link></p>
                </div>
            </form>
        </section>
    );
});

export default Auth;
