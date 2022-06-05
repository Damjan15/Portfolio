import { SecondaryButton } from "./buttons";

const Project = ({ newProject }) => {
  return (
    <div className={`flex flex-col ${newProject ? "md:flex-row-reverse" : "md:flex-row"} md:items-center md:justify-between`}>
      <div className="w-full mb-3 md:w-2/6 md:mb-0">
        <img
          src="/assets/image-portfolio-manage.jpg"
          className="w-full"
          alt="Manage Cover"
        />
      </div>
      <div className="w-full space-y-4 text-center md:w-3/6 md:space-y-10 md:text-left">
        <h2>Manage</h2>
        <p className="font-public text-grayDarkBlue">
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>
        <SecondaryButton>View Project</SecondaryButton>
      </div>
    </div>
  );
};

export default Project;
