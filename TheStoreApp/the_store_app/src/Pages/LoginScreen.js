import { useNavigate } from 'react-router-dom';

export default function Login () {
    const navigate = useNavigate();

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
                            <input type="text" size="40" placeholder="Username"/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input type="text" size="40" placeholder="Password"/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}}>
                            <select name="signInOpt" id ="signInOpt">
                                <option value="customer">Sign in as Customer</option>
                                <option value="admin">Sign in as Admin</option>
                            </select><br/>
                            <button style={{marginTop: "5px"}}>Sign Up</button>
                        </td>
                        <td style={{textAlign: "right"}}>
                            <button style={{padding: "10px"}}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate("/");
                                }}>Sign In</button>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}