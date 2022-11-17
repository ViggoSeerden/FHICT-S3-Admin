import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jwt_decode from "jwt-decode"
import axios from "axios";

const Navbar = () => {

    const navigate = useNavigate();

    const handleCallbackResponse = async (response) => {
        console.log("Encoded JWT ID token: " + response.credential);
        var decoded = jwt_decode(response.credential);
        console.log(decoded);
        console.log(encodeURIComponent(decoded.sub));
        var apiResponse = await axios.get('https://localhost:7019/api/User/CheckAdmin?token=' + decoded.sub)
        console.log(apiResponse);

        if (apiResponse.data === true) {
            var loggeduser = await axios.get('https://localhost:7019/api/User/GetByToken?token=' + decoded.sub);
            console.log(loggeduser);
            localStorage.setItem('user', JSON.stringify(loggeduser))
            document.getElementById("signInDiv").hidden = true;
            window.location.reload();
        }
    }

    function handleSignOut(event) {
        localStorage.removeItem('user');
        document.getElementById("signInDiv").hidden = false;
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "medium" }
        )
        window.location.reload();
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "864684223194-lu88rv54ai48p4mu6sjb3ps7v2fnn3ij.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })

        if (!localStorage.getItem('user')) {
            google.accounts.id.renderButton(
                document.getElementById("signInDiv"),
                { theme: "outline", size: "medium" }
            )
        }

    }, []);

    function goHome() {
        navigate('/');
    }

    return (
        <div className="navbar">
            <h2 onClick={goHome} style={{ textAlign: "center" }}>TTS SIM ADMIN</h2>
            <table className="navtable">
                <tbody>
                    <tr>
                        <td className="normaltd"><Link to="/News">News</Link></td>
                        <td className="normaltd"><Link to="/Shop">Shop</Link></td>
                        <td className="normaltd"><Link to="/Accounts">Accounts</Link></td>
                        <td className="profiletd">
                            <div id="signInDiv" style={{ marginLeft: 25 }}></div>
                            {localStorage.getItem('user') &&
                                <div>
                                    <h4 id="profileName">{JSON.parse(localStorage.getItem('user')).data.value.username}</h4>
                                    <div className="userMenu" hidden>
                                        <Link onClick={(e) => handleSignOut(e)} style={{ color: "white" }}>Sign Out</Link>
                                    </div>
                                </div>
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Navbar;