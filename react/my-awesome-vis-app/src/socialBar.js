import React from 'react';

class SocialBar extends React.Component {
    render() {
        return (
            <div id="social-Bar">
                <div className="row mt-2 justify-content-end">
                    <a href="https://youtube.com/"><img className="social-icon" src={require("./images/youtube-icon.png")} alt="youtube-icon" /></a>
                </div>
                <div className="row mt-2 justify-content-end">
                    <a href="https://facebook.com/"><img className="social-icon" src={require("./images/facebook.png")} alt="facebook-icon" /></a>
                </div>
                <div className="row mt-2 justify-content-end">
                    <a href="https://instagram.com/"><img className="social-icon" src={require("./images/instagram.png")} alt="instagram-icon" /></a>
                </div>
                <div className="row mt-2 justify-content-end">
                    <a href="https://twitter.com/secdeenergia?lang=es"><img className="social-icon" src={require("./images/twitter.png")} alt="twitter-icon" /></a>
                </div>
            </div>
        );
    }
}

export default SocialBar;