"use client";
import Button from "@/components/Button";
import { useState } from "react";

const ToDo = () => {
    const [activity, setActivity]    = useState("");
    const [deskripsi, setDeskripsi]  = useState("");

    const [toDoList, setToDoList]    = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("ini submit");
        setToDoList([{
            item_1: activity, item_2: deskripsi
        }]);
    } 
    return (

        <div className="container px-44">

            <div className="flex-flex">
            <h1 className="text-2x1">TODO LIST</h1>

            <form onSubmit={(e) => {
                handleSubmit(e);
                }}>
            <p>Activity</p>
            <input
               className="border-2 border-red-200"
               onChange={(value) => {
                setActivity(value.target.value);
               }}
            />   

            <p>Deskripsi</p>
            <input className="border-2 border-red-200"
            onChange={ (value) => {
                setDeskripsi(value.target.value);
            }}/>

            <br/>
            <Button title={'Simpan'} type={'submit'}/>


            </form>

            <br/>
            <Button 
            title={'Check Todo List'} 
            onClick={() => console.log(toDoList)}/>

            {toDoList.map((item, index) => (
                <div key={1}>
                    <p>{item.activity}</p>
                    <p>{item.deskripsi1}</p>
                </div>
                
            ))}

            </div>

        </div>
        
    )
}

// const ToDo = () => {
//     return <div>Ini Todo</div>;
// };

export default ToDo;