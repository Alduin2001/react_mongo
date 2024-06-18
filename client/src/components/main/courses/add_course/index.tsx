import React, { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import {motion} from 'framer-motion';
import { StoreContext } from "../../../../context/context";
const AddCourse: FC = () => {
    const rootStore = useContext(StoreContext);
    const {userStore} = rootStore;
    const {courseStore} = rootStore;

    const [formData, setFormData] = useState({
        name:'',
        description:''
    });
    const handleChange = (ev:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name, value} = ev.target;
        setFormData(prevState=>({
            ...prevState,
            [name]:value
        }));
    }

    const submitForm = async (ev:FormEvent<HTMLFormElement>)=>{
        ev.preventDefault();
        const result = await courseStore.createCourse(formData,userStore.token);
        console.log(result);
    }

    const resetForm = (ev:FormEvent<HTMLFormElement>)=>{
        setFormData({
            name:'',
            description:''
        })
    }
    

    return (
        <form className="flex flex-col gap-1 w-4/5 mx-auto bg-purple-500 p-2" onSubmit={submitForm}>
            <h1>Добавить курс</h1>
            <div className="flex flex-col gap-2">
                <input type="text" name="name" onChange={handleChange} value={formData.name} className="bg-transparent border-b-2 outline-none" placeholder="Название"/>
                <textarea name="description" placeholder="Введите описание курса" onChange={handleChange} value={formData.description}  className="outline-none bg-transparent w-full border-2 p-2" rows={10}/>
                <div className="flex gap-1">
                    <input type="submit" className="w-full bg-green-500 cursor-pointer" value="Добавить" />
                    <input type="button" onClick={resetForm} className="w-full bg-red-500 cursor-pointer" value="Очистить" />
                </div>
            </div>
        </form>
    )
}
export default AddCourse;