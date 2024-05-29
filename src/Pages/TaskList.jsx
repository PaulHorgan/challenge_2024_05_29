import { useContext } from "react";
import Tasklist from '../Data/tasklist.json'
import TaskCard from "../Components/taskCard";

export default function ListTasks() {

    return (
        <div className="wrapper">
            <div className="card">
                <TaskCard />

            </div>
        </div>


    )

}