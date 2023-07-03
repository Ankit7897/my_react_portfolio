import React from "react";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillFacebook,
    AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div>
                <img
                    src={"https://avatars.githubusercontent.com/u/126656410?s=400&u=f99ffac8366c64d63460c509ee797fde3b1c4d14&v=4"}
                    alt="Founder"
                />

                <h2>Ankit Yadav</h2>
                <p>Motivation is temporary, but discipline last forever.</p>
            </div>

            <aside>
                <h2>Social Media</h2>

                <article>
                    <a href="https://www.facebook.com/profile.php?id=100045414722957" target={"blank"}>
                        <AiFillFacebook />
                    </a>
                    <a href="https://www.linkedin.com/in/ankit-yadav-755a14209/" target={"blank"}>
                        <AiFillLinkedin />
                    </a>
                    <a href="https://github.com/Ankit7897" target={"blank"}>
                        <AiFillGithub />
                    </a>
                </article>
            </aside>
            <a href="#home">
                <AiOutlineArrowUp />
            </a>
        </footer>
    );
};

export default Footer;