import '../styles/footer.scss';
import logoRouge from '../assets/LOGO (2).png';

function Footer() {
    return (
        <footer className="footer">
                <img src={logoRouge} alt="Logo Kasa" className="footer_logo" />
                <div className="footer_text">
                    <p>© 2020 Kasa.</p>
                    <p>All rights reserved</p>
                </div>
        </footer>
    );
}
export default Footer;