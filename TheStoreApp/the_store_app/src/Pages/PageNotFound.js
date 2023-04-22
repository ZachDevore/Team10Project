import React from 'react';
import { stateCart, useGlobalState } from '../globalState';
import { useNavigate } from 'react-router-dom';
import '../App.css'



export default function PageNotFound () {
    const navigate = useNavigate();

    return (<>
        <div style={{margin:"0 auto", width: "fit-content", textAlign:"center"}}>
            <span style={{fontSize:"120%", fontWeight: "bold"}}>The requested page {window.location.href} was not found.</span>
            <br></br><br></br>
            <span style={{border:"1px solid white",borderRadius:"4px",cursor:"pointer", padding:"4px"}}
                onClick={(e) => {
                    e.stopPropagation();
                    navigate("/"); // Use router to goto the default page
                }}
            >
                Return to main page
            </span>
            <br></br><br></br>
        </div>
    </>
    );
}
