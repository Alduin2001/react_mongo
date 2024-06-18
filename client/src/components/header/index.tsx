import React, { FC, useContext, useEffect, useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { StoreContext } from "../../context/context";
import { jwtDecode } from "jwt-decode";
import { publicRoutes, authRoutes, AdminRoutes } from "../../utilits/routes";
import './custom-burger.css';
import SVGLogo from "./logo";
import {motion} from 'framer-motion';
import Burger from "./burger-btn";
import CloseBurger from "./close-burger";
const Header: FC = observer(() => {
    const rootStore = useContext(StoreContext);
    const { userStore } = rootStore;
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const obj = jwtDecode(token);
                console.log(obj);
            } catch (err) {
                console.log('Invalid token', err);
            }
        }
    }, [userStore.token]);

    const Logout = async (ev: MouseEvent<HTMLAnchorElement>) => {
        ev.preventDefault();
        await userStore.logoutUser();
    };

    return (
        <header className="bg-header p-4 flex justify-between items-center text-font">
            <SVGLogo />
            <h1 className="text-2xl">IT-курсы</h1>
            <button onClick={() => setIsOpen(true)}><Burger/></button>
            {isOpen && (
                <motion.menu initial={{x:400}} animate={{x:isOpen ? 0 : 400}} transition={{duration:.7}} className="bg-menu">
                    {/* Ссылки для админа */}
                    {userStore.role == 'Админ' && (
                        <div className="flex flex-col gap-1">
                            {AdminRoutes.filter((el) => el.name !== 'Курс').map((el, i) => <Link to={el.path} onClick={()=>setIsOpen(false)} className="menu-item text-xl">
                            <img src={el.icon}/>
                            <p>{el.name}</p>
                            </Link>)}
                        </div>
                    )}
                    {/* Ссылки для модератора */}
                    {userStore.role == 'Редактор' && (
                        <div className="flex flex-col gap-1">

                        </div>
                    )}
                    {/* Ссылки для авторизованного пользователя */}
                    {userStore.isAuth ? (
                        <div className="flex flex-col gap-1">
                            {authRoutes.filter((el) => el.name !== 'Курс').map((el, i) => <Link to={el.path} onClick={()=>setIsOpen(false)} className="flex gap-1 items-center text-xl">

                            <img src={el.icon}/>
                            <p>{el.name}</p>
                            </Link>)}
                            <a href="#" onClick={Logout} className="text-xl text-white">Выход</a>
                        </div>
                    ) :
                        // Ссылки для неавторизованного
                        <div className="flex flex-col gap-1">
                            {publicRoutes.filter((el) => el.name !== 'Курс').map((el, i) => (
                                <Link key={i} to={el.path} onClick={()=>setIsOpen(false)} className="flex gap-1 items-center text-xl text-white">
                                    <img src={el.icon} />
                                    <p>{el.name}</p>
                                </Link>
                                ))}
                        </div>
                    }
                    <button onClick={() => setIsOpen(false)}><CloseBurger/></button>
                </motion.menu>
            )}

        </header>
    );
});

export default Header;