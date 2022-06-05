import { SecondaryButton } from "../../components/buttons"
import { Layout } from "../../containers"

const SingleProject = () => {
  return (
    <Layout title="Single Project">
        <div>
            <img src="/assets/image-manage-hero.jpg" className="w-full" alt="Project Cover" />
        </div>

        <div className="my-8">
            <div>
                <h3 className="mb-3">Project Background</h3>
                <p className="font-public">This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.</p>
            </div>

            <div className="mt-8">
                <h3 className="mb-3">Info</h3>
                <p className="font-public mb-4">This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
                
               <SecondaryButton>Visit Website</SecondaryButton>
               <a href="/" className="text-cyan font-public text-lg font-bold ml-6 underline">Visit Github</a>
            </div>
        </div>
    </Layout>
  )
}

export default SingleProject