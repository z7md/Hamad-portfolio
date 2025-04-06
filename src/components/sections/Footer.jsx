import { RevealOnScroll } from "../RevealOnScroll"
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export const Footer = () => {
    return <section id="footer" className="flex items-center justify-center bg-[#0a0a0a] p-2">
            <div className="max-w-5xl mx-auto px-4 flex justify-between gap-8">
               <a href="https://www.linkedin.com/in/hamad-almohaimeed/" className="opacity-70 hover:opacity-100"><FaLinkedin className="size-8"/></a> 
                <a href="https://wa.me/966508559192" className="opacity-70 hover:opacity-100 cursor-pointer"><FaWhatsapp className="size-8" /></a>
            </div>
    </section>
}