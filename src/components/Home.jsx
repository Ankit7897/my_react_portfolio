import React, { useRef } from 'react'
import { animate, motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import img1 from "../assets/img1.png"

const Home = () => {
    const clintCoutnt = useRef(null)
    const ProjectConts = useRef(null)
    const animationClintCount = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) => (clintCoutnt.current.textContent = v.toFixed()),
        })
    }

    const animationProjectCont = () => {
        animate(0, 500, {
            duration: 1,
            onUpdate: (v) => (ProjectConts.current.textContent = v.toFixed())
        })
    }
    const animation = {
        h1: {
            initial: { x: "-100%", opacity: 0 },
            whileInView: { x: 0, opacity: 1 }
        },
        button: {
            initial: { y: "-100%", opacity: 0 },
            whileInView: { y: 0, opacity: 1 }
        }
    }
    return (
        <div id='home'>

            <section>
                <div>
                    <motion.h1 {...animation.h1}>
                        Hi, I Am <br /> Ankit Yadav
                    </motion.h1>
                    <Typewriter
                        options={{
                            strings: ["A Full Stack Developer", "A Designer", "A Treder"],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: " typewriterpara",
                            cursor: ""
                        }}

                    />

                    <div>
                        <a href="mailto:official.miankityadav2222@gmail.com"> Hire Me</a>
                        <a href="#work">Projects <BsArrowUpRight /></a>
                    </div>

                    <article>
                        <p>
                            +<motion.span whileInView={animationClintCount} ref={clintCoutnt}></motion.span>
                        </p>
                        <span>Client Wolrdwide</span>
                    </article>

                    <aside>
                        <article>
                            <p>
                                +<motion.span whileInView={animationProjectCont} ref={ProjectConts}></motion.span>
                            </p>
                            <span>Project Dode</span>
                        </article>

                        <article data-special>
                            <p>Contact</p>
                            <span>miankityadav2222@gmail.comm</span>
                        </article>
                    </aside>

                </div>
            </section>
            <section>
                <img src={img1} alt='Ankit' />
            </section>
            <BsChevronDown />
        </div>

    )
}

export default Home