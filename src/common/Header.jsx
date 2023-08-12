import "./Header.css";
export default function Header(){
    return(
        <>
        <nav className="nav">
            <a href="https://www.google.com.ua/?hl=uk">
            <div className="nav-brand">
                <img src="src\images\dota.png" className="nav-brand-logo"></img>
                <p className="nav-brand-name">Dota community</p>
            </div>
            </a>

        
            <ul className="nav-options">
                <a href="https://www.google.com.ua/?hl=uk"><li>Hero builds</li></a>
                <a href="https://www.google.com.ua/?hl=uk"><li>Recent changes</li></a>
                <a href="https://www.google.com.ua/?hl=uk"><li>Discussions</li></a>
            </ul>

            <ul className="nav-options login">
                <a href="https://www.google.com.ua/?hl=uk"> <li>Sign in</li></a>
                <a href="https://www.google.com.ua/?hl=uk"><li>Sign up</li></a>
            </ul>
        </nav>
         <div className="nav-transition-bar"></div>
        </>
        
    )
}