import {Card, CardContent, CardHeader} from "@/components/ui/card"
import {Code, Box, Torus} from "lucide-react"

export function AboutMe() {
    return (
        <section id="about" className="py-35 bg-zinc-900">
            <div>
                <div className="mb-16 m-8">
                    <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-balance text-center">About Me</h2>
                    <p className="text-xl text-zinc-400 mx-auto mb-5 mt-12 text-center">
                        I&apos;m a computer engineer that enjoys solving both hardware and software problems.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-3 justify-center m-5 sm:m-10 lg:m-20">
                    <Card className="bg-zinc-800 border-zinc-900 hover:border-sky-700 
                        active:border-sky-500 transition-colors delay-25">
                        <Code className="h-15 w-15 mt-4 mx-auto text-blue-500"/>
                        <CardHeader className="text-center text-3xl font-bold mt-6">
                            Software Development
                        </CardHeader>
                        <CardContent className="text-center text-zinc-400 text-lg mb-6 lg:text-xl">
                            Worked on machine learning projects with ResNet and BYOL for robotics, alongside
                            frontend web development in React and Next.js, delivering practical and impactful solutions.
                        </CardContent>
                    </Card>
                    <Card className="bg-zinc-800 border-zinc-900 hover:border-sky-700 
                        active:border-sky-500 transition-colors delay-25">
                        <Box className="h-15 w-15 mt-4 mx-auto text-blue-500"/>
                        <CardHeader className="text-center text-3xl font-bold mt-6">CAD Design</CardHeader>
                        <CardContent className="text-center text-zinc-400 text-lg mb-6 lg:text-xl">
                            Proficient in Onshape and SolidWorks for 3D modeling, assemblies, and technical drawings,
                            supporting prototyping and mechanical engineering projects with efficiency.
                        </CardContent>
                    </Card>
                    <Card className="bg-zinc-800 border-zinc-900 hover:border-sky-700 
                        active:border-sky-500 transition-colors delay-25">
                        <Torus  className="h-15 w-15 mt-4 mx-auto text-blue-500"/>
                        <CardHeader className="text-center text-3xl font-bold mt-6">Blender</CardHeader>
                        <CardContent className="text-center text-zinc-400 text-lg mb-6 lg:text-xl">
                            Skilled in 3D modeling, rendering, and animation with Blender, creating detailed
                            visualizations and concept art to communicate ideas and designs effectively.
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}