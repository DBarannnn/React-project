import "./Footer.css";

export default function Footer(){
    return(
        <>
        <footer className="footer">
            <p className="footer-text">Contact: theworstgameintheworld@gmail.com</p>
            <ul className="footer-media-list">
                <li><a href="https://www.google.com.ua/?hl=uk"><img src="src\images\instagram.png" alt="instagram imgae" className="footer-img"/></a></li>
                <li><a href="https://www.google.com.ua/?hl=uk"><img src="src\images\facebook.png" alt="facebook image" className="footer-img" /></a></li>
                <li><a href="https://www.google.com.ua/?hl=uk"><img src="src\images\twitter.png" alt="twitter image" className="footer-img" /></a></li>

            </ul>
        </footer>
        </>
    )
}
