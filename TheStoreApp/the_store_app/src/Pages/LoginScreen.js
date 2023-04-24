import {stateUser, useGlobalState} from "../globalState"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login () {
    const navigate = useNavigate();
    const [userData, setUserData] = useGlobalState(stateUser);

    const [data, setData] = useState ({
        username: "",
        signInOpt: "customer",
        password: ""
    })

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div style={{margin: "100px"}} id="signIn">
                <table style={{margin: "0 auto"}}>
                    <colgroup>
                        <col style={{width: "50%"}}/>
                        <col style={{width: "50%"}}/>
                    </colgroup>
                    <tr>
                        <td colspan="2">
                            <input type="text" name="username" onChange={updateData} size="40" placeholder="Username"/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input type="text" name="password" onChange={updateData} size="40" placeholder="Password"/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}}>
                            <select name="signInOpt" onChange={updateData} id ="signInOpt">
                                <option value="customer">Sign in as Customer</option>
                                <option value="admin">Sign in as Admin</option>
                            </select><br/>
                            <button style={{marginTop: "5px"}}>Sign Up</button>
                        </td>
                        <td style={{textAlign: "right"}}>
                            <button style={{padding: "10px"}}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    doSignIn(data, userData, setUserData)
                                    navigate("/");
                                }}>Sign In</button>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

function doSignIn(data, userData, setUserData) {
    let ud = JSON.parse(JSON.stringify(userData));
    ud.userId = data.username;
    ud.isAdmin = (data.signInOpt=="admin");
    setUserData(ud);
}