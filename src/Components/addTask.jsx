import { useState } from "react";
import AddTask from "../Components/addTask";



export default function AddNewTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [estTime, setEstTime] = useState();
    const [difficulty, setDifficulty] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {title, description, imageUrl, estTime }

        fetch("http://localhost:3000/tasklist", 
        {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(task)
        })

    }


    return(
        <div className="body">
            <div className="newTask">
                <form onSubmit={handleSubmit}>
                    Set New Task <input required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}></input> <div />
                    Add Description (required input) <input required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}></input><div />
                    Add link to picture <input required
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}></input><div />
                    Estimate Time needed <input required
                    value={estTime}
                    onChange={(e) => setEstTime(e.target.value)}></input><div />
                    Choose Difficulty rating <select required
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}>
                        <ul>
                            <li>Easy</li>
                            <li>Medium</li>
                            <li>Hard</li>
                            <li>Solid</li>
                        </ul>
                    </select><div />
                    <button>Click to Submit</button>
                </form>              
            </div>
        </div>

    );
}

