import React from 'react';
import { stateUser, useGlobalState } from '../globalState';
import '../App.css'


export default function UserNameWidget() {
    const [userData, setUserData] = useGlobalState(stateUser);

    return (<>
        <div className='user-name-widget' style={{display: "inline-block"}}>
            <table>
                <tr style={{display: userData.userId.length==0 ? 'none' :'table-row'}} >
                    <td><img src={userData.isAdmin ? "../img/user-admin.png" : "../img/user-normal.png"}></img></td>
                    <td>&nbsp;&nbsp;{userData.userId}</td>
                </tr>
            </table>
        </div>
    </>);
}