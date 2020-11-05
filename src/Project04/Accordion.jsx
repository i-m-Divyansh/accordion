import React, { useState } from 'react';
import './Accordion.css';
import Questions from './Questions';
import Card from './Card';



const Accordion = () => {
    // Hook
    const [QuesAnswers, setQuesAnswers] = useState(Questions);
    // Return
    return (
        <div className="Body_div">
            <div className="main_div shadow row">
                <div className="Heading_div text-center col-md-4">
                    <h2>Questions And Answers About Login</h2>
                </div>
                <div className="col-md-8 CardsHolder">
                    {QuesAnswers.map((Q) => <Card
                        key={Q.id}
                        Id={Q.id}
                        info={Q.info}
                        title={Q.title}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Accordion;