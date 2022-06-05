import { Project } from "../components";
import { Layout } from "../containers";

export default function Portfolio() {
    return(
        <Layout title="Portfolio Projects">
            <div className="flex flex-col space-y-8 my-11">
            <Project />
            <Project newProject />
            <Project />
            </div>
        </Layout>
    )
}