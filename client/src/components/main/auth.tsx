import React, { FC, useState, ChangeEvent, FormEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/context";
import { observer } from "mobx-react";
import {motion} from 'framer-motion';
import Validator from "../../utilits/validator";
const Auth: FC = observer(() => {
    const [formData, setFormData] = useState({ login: '', password: '' });
    const [invalid, setInvalid] = useState({ login: '' });
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
        const isEnglish = Validator.isEnglish(formData.login);
        if (!isEnglish) {
            setInvalid({
                login: 'Логин должен содержать только латиницу'
            })
            return;
        }
        const response = await userStore.authUser(formData);
        if (response && response.trim().length > 0) {
            navigate('/');
        } else {
            console.log('Error');
        }
    };

    return (
        <section className="w-3/5 mx-auto mt-2 p-1 h-full bg-fuchsia-600 bg-opacity-50">
            <form className="flex flex-col gap-1 w-full relative" onSubmit={submitForm}>
                <h1>Авторизация</h1>
                <div className="flex flex-col gap-1">
                    <input type="text" name="login" className="w-full input-icon bg-transparent border-b-2 outline-none" value={formData.login} placeholder="Логин" onChange={handleChange} />
                    {invalid.login !== '' && (
                        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5}} className="text-red-600 font-bold bg-message p-2 rounded-md">{invalid.login}</motion.p>
                    )}
                    <input type="password" name="password" className="w-full bg-transparent border-b-2 outline-none" value={formData.password} placeholder="Пароль" onChange={handleChange} />
                    <div className="flex gap-1">
                        <input type="submit" className="bg-green-500 w-full p-1" value="Авторизоваться" />
                        <input type="button" className="bg-red-500 w-full p-1" value="Сбросить форму" />
                    </div>
                    <p>У вас нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
                </div>
            </form>
        </section>
    );
});

export default Auth;
