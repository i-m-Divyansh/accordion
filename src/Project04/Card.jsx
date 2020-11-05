import React, { useState } from 'react'
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';


const Card = ({ info, title }) => {
    const [Readmore, setReadmore] = useState(false)
    // Readmore Handler
    const readmoreHandler = () => {
        setReadmore(!Readmore);
    }
    // Conditional Rendering
    var display = "";
    if (Readmore) {
        display = "Visible"
    }
    else {
        display = "Hidden"
    }
    // Return
    return (
        <div className="card-div shadow">
            <div className="d-flex justify-content-between align-content-center">
                <div className="title_div">
                    <h5>{title}</h5>
                </div>
                <div className="">
                    <button onClick={readmoreHandler} className="readBtn">
                        {Readmore ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                </div>
            </div>
            {Readmore ? <p className="text-secondary">{info}</p> : ""}
        </div>
    )
}

export default Card;