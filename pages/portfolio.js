import { Project } from "../components";
import { Layout } from "../containers";
import { getProjects } from "../utils";

export default function Portfolio({ projects }) {
    return(
        <Layout title="Portfolio Projects">
            <div className="flex flex-col space-y-16 my-11">
                { projects.map((project) => <Project key={project.id} project={project} />)}
            </div>
        </Layout>
    )
}


export async function getStaticProps() {
    const projects = await getProjects() || [];

    return {
        props: {
            projects
        }
    }
}