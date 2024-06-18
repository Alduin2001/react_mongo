import { observer } from "mobx-react";
import React,{FC, useContext} from "react";
import ExersicesTheme from "./exersices_theme/exersices_theme";
import AddExersice from "./add_exersice/add_exersice";
import { StoreContext } from "../../../context/context";
const Exersice:FC = observer(()=>{
    const rootStore = useContext(StoreContext);
    const {userStore} = rootStore;

    return(
        <section className="w-full p-2 flex flex-col gap-2">
            <h1 className="text-2xl">Занятия</h1>
            {(userStore.role=='Препод' || userStore.role=='Админ') && (
                <AddExersice/>
            )}
            <div className="flex flex-col gap-2">
                <ExersicesTheme data={{theme:"БЖД",number:[1,2],exersice:['Оказание первой помощи при ожогах','Оказание первой помощи при ожогах'],content:['Для оказания первой помощи при ожогах','Для оказания первой помощи при ожогах']}}/>
                <ExersicesTheme data={{theme:"РХБЗ",number:[1,2],exersice:['Оказание первой помощи при отравлении газом','Оказание первой помощи при отравлении газом'],content:['Для оказания первой помощи при отравлении газом','Для оказания первой помощи при отравлении газом']}}/>
            </div>
        </section>
    )
})

export default Exersice;