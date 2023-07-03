import React, { useState } from 'react'
import contact from "../assets/contact.jpg"
import toast from "react-hot-toast"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [disableBtn, setdisableBtn] = useState(false)

    const submitHandeller = async (e) => {
        e.preventDefault()
        setdisableBtn(true)
        try {
            await addDoc(collection(db, "contacts"), { name, email, message })
            setName("")
            setEmail("")
            setMessage("")
            toast.success("Message send")
            setdisableBtn(false)
        } catch (error) {
            toast.error("Message not send")
            console.log(error)
            setdisableBtn(false)
        }


    }
    return (
        <div id='contact'>
            <section>
                <form onSubmit={submitHandeller}>
                    <h2>Contact Me</h2>
                    <input type="text" placeholder='Enter name' required value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder='Enter Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder='Enter message' required value={message} onChange={(e) => setMessage(e.target.value)} />

                    <button disabled={disableBtn} type='submit' className={disableBtn ? "disableBtn" : ""}>Send</button>
                </form>
            </section>
            <aside>
                <img src={contact} alt=" contact" />
            </aside>
        </div>
    )
}

export default Contact