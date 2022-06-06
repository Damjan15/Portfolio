import Link from "next/link"
import { SecondaryButton } from "./buttons";
import { motion } from "framer-motion";

const Project = ({ project }) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className={`flex flex-col ${project.new ? "md:flex-row-reverse" : "md:flex-row"} md:items-center md:justify-between`}>
      <div className="w-full mb-3 md:w-2/6 md:mb-0">
        <img
          src={project.cover.url}
          className="w-full"
          alt="Manage Cover"
        />
      </div>
      <div className="w-full space-y-4 text-center md:w-3/6 md:space-y-10 md:text-left">
        <h2>{project.title}</h2>
        <p className="font-public text-grayDarkBlue">
          { project.background}
        </p>
        <SecondaryButton>
          <Link href={`project/${project.slug}`}>View Project</Link>
        </SecondaryButton>
      </div>
    </motion.div>
  );
};

export default Project;
