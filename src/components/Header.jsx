import logo from '../assets/logo.png';

export default function Header(){
    return(
        <div id="header">
            <img src={logo} alt="logo"/>
            <h1>Investment Calculator</h1>
        </div>
    );
}