import './Nav.css'
function Nav() {

    let obj = {
        backgroundColor: 'red',
    }
    return (
        <ul>
            <li  ><a className="active" href="#home">Home</a></li>
            <li style={obj}><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    )

}

export default Nav;

