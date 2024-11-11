import { useState } from "react";
import { getData } from "../data.mjs";

export default function AddButton(){
    const [formData, setFormData] = useState(null);
    getData()

    return(
        <div>
            <input placeholder="Add" />
            <button type="submit">Submit</button>
        </div>
    )
}