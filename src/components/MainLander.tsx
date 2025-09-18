import {TypeAnimation} from "react-type-animation"

export function MainLander(){

    //Adds functionality for the View My Work button
    const scrollToProjects = () => {
        const element = document.getElementById("projects")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return(
        <section id="main" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
            <div className="opacity-5" />  {/*absolute inset-0 bg-[url('/glowing-circuit-matrix-stockcake.jpg')]*/}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* This div is for the main title text of this landing page*/}
                <div className="animate-float">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
                        <span className="text-foreground animate-slide-up [--delay:.1s]">Hi, I&apos;m </span>
                        <span className="text-primary animate-glow text-blue-500 animate-slide-up [--delay:.1s]">Matthew Zhu</span>
                    </h1>
                </div>

               {/*This div adds the typing animation for traits */}
                <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-16 text-zinc-400">
                    <TypeAnimation
                        sequence={[
                        "Computer Engineer",
                        2000,
                        "Software Developer",
                        2000,
                        "Hardware Designer",
                        2000,
                        "Problem Solver",
                        2000,
                        ]}
                        wrapper="span"
                        speed={75}          //Modifiable speed
                        repeat={Number.POSITIVE_INFINITY}   //Infinite repeat
                    />
                </div>
                {/*Basic short description, change later*/}
                <p className="text-xl text-zinc-400 mx-auto mb-5">
                    Welcome to my website! Not much here for now...</p>

                {/*Adds navigation buttons*/}
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
                    <button onClick={scrollToProjects} className="bg-gradient-to-r from-sky-800 to-blue-500 border-2 border-blue-600
                    hover:bg-gradient-to-r hover:from-sky-700 hover:to-blue-400 text-white font-bold py-3 px-9 rounded-lg">View My Work</button>
                    <button onClick={scrollToProjects} className="text-blue-500 font-bold py-3 px-9 border-2 border-blue-600
                     hover:text-white hover:bg-gradient-to-r hover:from-sky-900 hover:to-blue-600 hover:bg-blue-600 rounded-lg text-center me-2 mb-1">Get In Touch</button>
                </div>

            </div>        
        </section>
    )
}