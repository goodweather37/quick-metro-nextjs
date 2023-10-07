"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";

export default function CreateForm() {
    const router = useRouter();

    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [priority, setPriority] = useState("low");
    const [isLoading, setIsLoading] = useState(false);

    const handelSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const ticket = {
            title, body, priority, email: "mario@email.com"
        }

        const res = await fetch('http://localhost:4000/tickets', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(ticket)
        });

        if (res.status === 201) {
            router.refresh();
            router.push('/tickets');
        }
    }

    return (
        <form onSubmit={handelSubmit} className="w-1/2">
            <label>
                <span>Title: </span>
                <input
                    name="title"
                    required
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Body: </span>
                <textarea 
                    required
                    type="text"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    name="body"
                />
            </label>
            <label>
                <span>Set Priority:</span>
                <select onChange={(e) => setPriority(e.target.value)} value={priority}>
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>
            <button
                className="btn-primary"
                disabled={isLoading}
            >
                {isLoading && <span>Adding ...</span>}
                {!isLoading && <span>Add ticket</span>}
            </button>
        </form>
    )
}