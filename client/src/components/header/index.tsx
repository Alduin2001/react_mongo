import React, { FC, useContext, useEffect, useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { StoreContext } from "../../context/context";
import { jwtDecode } from "jwt-decode";
import { publicRoutes, authRoutes } from "../../utilits/routes";
import SVGLogo from "./logo";
const Header: FC = observer(() => {
    const rootStore = useContext(StoreContext);
    const { userStore } = rootStore;

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
        console.log("Logged out");
    };

    return (
        <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 p-4 flex justify-between items-center">
            <SVGLogo/>

            {userStore.isAuth ? (
                <div className="flex gap-1 xs:flex-col sm:flex-row">
                    {authRoutes.filter((el)=>el.name!=='Курс').map((el, i) => <Link to={el.path} className="text-xl text-white">{el.name}</Link>)}
                    <a href="#" onClick={Logout} className="text-xl text-white">Выход</a>
                </div>
            ) :
                <div className="flex gap-1 xs:flex-col text-base sm:flex-row">
                    {publicRoutes.filter((el)=>el.name!=='Курс').map((el, i) => <Link key={i} to={el.path} className="text-xl text-white">{el.name}</Link>)}
                </div>
            }
        </header>
    );
});

export default Header;