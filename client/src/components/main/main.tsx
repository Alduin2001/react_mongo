import React, { FC, useContext } from "react";
import { publicRoutes, authRoutes, ErrorPage, AdminRoutes } from "../../utilits/routes";
import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react";
import { StoreContext } from "../../context/context";

const Main: FC = observer(() => {
    const rootStore = useContext(StoreContext);
    const {userStore} = rootStore;
    return (
        <main className="flex-grow w-4/5 mx-auto min-h-dvh bg-black bg-opacity-50 text-font">
            <Routes>
                {/* For public routes */}
                {userStore.isAuth === true && authRoutes.map((el,i)=><Route key={i} path={el.path} element={<el.component/>} />)}
                {userStore.isAuth === false && publicRoutes.map((el,i)=><Route key={i} path={el.path} element={<el.component/>} />)}
                {userStore.isAdmin === true && AdminRoutes.map((el,i)=><Route key={i} path={el.path} element={<el.component/>}/>)}
                <Route path={ErrorPage.path} element={<ErrorPage.component/>}/>
            </Routes>
        </main>
    );
});
export default Main;
