import { RevealOnScroll } from "../RevealOnScroll"
export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent ">Featured Project</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            Meals Tracker Project
                        </h3>
                        <p className="text-gray-400 mb-4">An app designed to help healthy restaurants efficiently manage customer subscriptions and enhance their service.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "NodeJs", "Express", "MongoDB"].map((tech, key) => (
                                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition 
                                " key={key}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/z7md/laraveltodo" className="text-blue-400 hover:text-blue-300 transition-colors my-4 " target="_blank" >
                                View Project &rarr;
                            </a>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            RiyadhGPT Project
                        </h3>
                        <p className="text-gray-400 mb-4">LLM Model helps riyadh visitors and citizen by answer any question </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "KeplerGL", "Flask", "Azure"].map((tech, key) => (
                                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition 
                                " key={key}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-blue-400 hover:text-blue-300 transition-colors my-4 ">
                                The Project is owned by KACST and hidden due to restriction
                            </p>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            Balot App
                        </h3>
                        <p className="text-gray-400 mb-4">A smart calculator app designed to simplify ballot counting and ensure accurate voting calculations.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Tailwind"].map((tech, key) => (
                                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition 
                                " key={key}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://z7md.github.io/balot" className="text-blue-400 hover:text-blue-300 transition-colors my-4 " target="_blank" >
                                View Project &rarr;
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            To Do app
                        </h3>
                        <p className="text-gray-400 mb-4">A task management app designed to streamline team coordination and conduct worker assessments efficiently.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Laravel"].map((tech, key) => (
                                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition 
                                " key={key}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/z7md/Meal-tracker-project" className="text-blue-400 hover:text-blue-300 transition-colors my-4 " target="_blank" >
                                View Project &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}