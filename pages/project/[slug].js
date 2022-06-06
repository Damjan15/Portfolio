import Image from "next/image"
import { SecondaryButton } from "../../components/buttons"
import { Layout } from "../../containers"
import { getProjects, getSingleProject } from "../../utils"

export default function SingleProject({ project }) {
  return (
    <Layout title="Single Project">
        <div className="w-full">
            <img src={project.cover.url} className="w-full" alt="Project Cover" />
        </div>

        <div className="my-8">
            <div>
                <h3 className="mb-3">Project Background</h3>
                <p className="font-public">{project.background}</p>
            </div>

            <div className="mt-8">
                
               <SecondaryButton>
                   <a href={project.link} target="_blank" rel="noreferrer">Visit Website</a>
               </SecondaryButton>
               <a href={project.githubLink} className="text-cyan font-public text-lg font-bold ml-6 underline" target="_blank" rel="noreferrer">Visit Github</a>
            </div>
        </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
    const project = await getSingleProject(params.slug) || null;

    return {
        props: {
            project
        }
    }
}


export async function getStaticPaths() {
    const projects = await getProjects()

    const paths = projects.map((project) => ({
        params: { slug: project.slug }
    }))

    return { paths, fallback: false }
}
