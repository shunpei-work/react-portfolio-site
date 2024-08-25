import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/IMG_1990.jpg';
import { FaTwitter,FaGithub } from 'react-icons/fa';

export const Header = () => {
    return (
        <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
            <div className="overlay"></div>
            <div className="contaner">
                <div className="display-table">
                    <div className="display-table-contents">
                        {/* カバー画像 */}
                        <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
                        <h1 className="title-text">矢内 駿平</h1>
                        <h3 className="title-text">SystemEngineer</h3>
                        <ul className="social-icons">
                            <li className="icon-link">
                                <a href="https://twitter.com/">
                                <FaTwitter color="white" size="2rem" />
                                </a>
                            </li>
                            <li className="icon-link">
                                <a href="https://github.com/shunpei-work">
                                <FaGithub color="white" size="2rem" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};