import React from "react";
import SubjectComp from "./SubjectComp";
import ClassComp from "./ClassComp";

const CollageCop = () => {
    return (
        <>
            <div className="collage" style={{ backgroundColor: "orange", padding: 40 }}>
                <h1>Collage Component</h1>
                <ClassComp />
            </div>
        </>
    )
}

export default CollageCop