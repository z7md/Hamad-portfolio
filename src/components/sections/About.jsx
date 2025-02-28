import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
export const About = () => {

    const frontendSkills = [
        "React",
        "Tailwind",
        "TypeScript",
        "HTML",
        "CSS",
    ];

    const backendSkills = [
        "Node.Js",
        "Django",
        "Flask",
        "AWS",
        "MongoDB",
        "SQL",
        "ExpressJs",
        "NextJs",


        
    ];

    const [showDetails1, setShowDetails1] = useState(false);
    const [showDetails2, setShowDetails2] = useState(false);



    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>

            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent ">
                    About me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I'm passionate about creating efficient,
                        user-friendly digital experiences and always eager to learn and innovate in the tech space.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Front end
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition 
                        " key={key}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Back end
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                        " key={key}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            🏫 Education
                        </h3>
                        <ul>
                            <li>
                                <strong>B.S in Computer Science</strong> - Qassim University (2020-2025)
                            </li>
                        </ul>
                    </div>

                    
                    <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all ">
                        <h3 className="text-xl font-bold mb-4">
                            🏫 Certificates
                        </h3>
                        <ul>

                            <li className="m-1">
                                <strong>AWS Web Solution Development Bootcamp</strong> - Tuwaiq
                            </li>
                            <li className="m-1">
                                <strong>Meta Front-End Developer Professional Certificate</strong> META
                            </li>
                        </ul>
                    </div>
                                        

                    <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all md:col-span-2 ">
                        <h3 className="text-xl font-bold mb-4">
                            💼  Work Experience
                        </h3>
                        <div className="rounded-2xl space-y-4 text-gray-300 p-1 ">
                            <div onClick={() => setShowDetails1((prev) => !prev)} className="hover:text-white">
                                <h4>Software Engineer Intern at KACST (06/2024 – 01/2025)

                                    <span className={` ml-1 ${showDetails1 ? "hidden" : ""}`}>&darr;</span>
                                    <span className={`${showDetails1 ? "" : "hidden"} ml-1`}>&uarr;</span>


                                </h4>
                                <p className={`mt-2 text-left text-blue-500/95 rounded-r-2xl
                            transition-all duration-500 ease-in-out transform
                            ${showDetails1 ? "opacity-100 translate-y-0 block" : "opacity-0 -translate-y-5 hidden"}
                             `}>
                                    <span className="block p-1">• Built a platform using React with integrated data visualization for interactive and user-friendly data analysis. </span>
                                    <span className="block p-1">• Designed and deployed a chatbot to assist users chatting with large language models.</span>
                                    <span className="block p-1">• Collaborated with backend developers using Flask framework to ensure seamless integration between the visualization components and the database.</span>
                                    <span className="block p-1"> • Customized maps based on dynamic data inputs to provide real-time updates</span>
                                </p>
                            </div>
                        </div>



                        <div className="space-y-4 text-gray-300 p-1">
                            <div onClick={() => setShowDetails2((prev) => !prev)} className="hover:text-white">
                                <h4>Full-stack Developer Intern at Roznamah IT Company (01/2024 – 3/2024)

                                    <span className={`${showDetails2 ? "hidden" : ""} ml-1`}>&darr;</span>
                                    <span className={`${showDetails2 ? "" : "hidden"} ml-1`}>&uarr;</span>

                                </h4>
                                <p className={`${showDetails2 ? "" : "hidden"} mt-2 text-left text-blue-500/95`}>
                                    <span className="block p-1">• Built an email system to send notifications to users using NodeJS. </span>
                                    <span className="block p-1">• Added features to enhance the website’s functionality using JavaScript.</span>
                                    <span className="block p-1">• Developed SQL functions to improve data processing.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}