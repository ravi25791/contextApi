import React, { useContext } from "react";
import { SubjectsContext } from "./contextApi/Context";

const SubjectComp = () => {
    const subjects = useContext(SubjectsContext)
    return (
        <>
            <div className="subject" style={{ backgroundColor: "#3a80c4", padding: 40 }}>
                <h1>Subject {subjects} </h1>
            </div>
        </>
    )
}

export default SubjectComp