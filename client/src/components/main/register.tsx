import React, { FC, useState, useEffect, ChangeEvent, FormEvent, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import Validator from "../../utilits/validator";
import {motion} from 'framer-motion';
const Register: FC = observer(() => {
    //Hooks
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        login: '',
        password: ''
    });
    const [invalid, setInvalid] = useState({
        firstname: '',
        lastname: '',
        login: ''
    });
    const [status, setStatus] = useState<string | null>(null);
    const rootStore = useContext(StoreContext);
    const navigate = useNavigate();
    const { userStore } = rootStore;
    // Function change inputs
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = ev.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    // Function for registration
    const submitForm = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const isRussian = Validator.isRussian(formData.firstname, formData.lastname);
        if (!isRussian) {
            setInvalid({
                firstname: 'Имя должно содержать только кириллицу',
                lastname: 'Фамилия должно содержать только кириллицу',
                login: ''
            })
            return;
        }
        const isEnglish = Validator.isEnglish(formData.login);
        if (!isEnglish) {
            setInvalid({
                firstname: 'Имя должно содержать только кириллицу',
                lastname: 'Фамилия должно содержать только кириллицу',
                login: 'Логин должен содержать только латиницу'
            })
            return;
        }
        const result = await userStore.createUser(formData);
        if (result && result.trim().length > 0) {
            navigate('/auth');
        }

    }
    // Function for reset form
    const resetForm = () => {
        setFormData({
            firstname: '',
            lastname: '',
            login: '',
            password: ''
        });
    }
    // useEffect for clear form when you input in fields
    useEffect(() => {
        setInvalid({
            firstname: '',
            lastname: '',
            login: ''
        });
    }, [formData.firstname, formData.lastname, formData.login]);
    return (
        <section className="w-3/5 mx-auto p-1 h-full">
            <form className="flex flex-col gap-1 p-2 w-full mt-2 bg-fuchsia-600 bg-opacity-50 text-white" onSubmit={submitForm}>
                <h1>Регистрация</h1>
                <div className="flex flex-col gap-1">
                    <input type="text" name="firstname" className="w-full bg-transparent border-b-2 outline-none" placeholder="Имя" value={formData.firstname} onChange={handleChange} />
                    {invalid.firstname !== '' && (
                        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5}} className="text-red-600 font-bold bg-message p-2 rounded-md">{invalid.firstname}</motion.p>
                    )}
                    <input type="text" name="lastname" className="w-full bg-transparent border-b-2 outline-none" placeholder="Фамилия" value={formData.lastname} onChange={handleChange} />
                    {invalid.lastname !== '' && (
                        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5}} className="text-red-600 font-bold bg-message p-2 rounded-md">{invalid.lastname}</motion.p>
                    )}
                    <input type="text" name="login" className="w-full bg-transparent border-b-2 outline-none" placeholder="Логин" value={formData.login} onChange={handleChange} />
                    {invalid.login !== '' && (
                        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5}} className="text-red-600 font-bold bg-message p-2 rounded-md">{invalid.login}</motion.p>
                    )}
                    <input type="password" name="password" className="w-full bg-transparent border-b-2 outline-none" placeholder="Пароль" value={formData.password} onChange={handleChange} />
                    <div className="flex gap-1">
                        <input type="submit" className="bg-green-500 w-full p-1" value="Зарегистрироваться" />
                        <input type="button" className="bg-green-500 w-full p-1" value="Сбросить форму" />
                    </div>
                    <p>У вас есть аккаунт? <Link to="/auth">Авторизоваться</Link></p>
                </div>
            </form>
        </section>
    );
});
export default Register;