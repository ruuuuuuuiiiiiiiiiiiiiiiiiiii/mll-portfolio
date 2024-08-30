import LineGradient from "../components/LineGradient";
import TextSpan from "../components/TextSpan";
import { motion } from "framer-motion";
import portfolio from "../images/project/mll-portfolio.png";
import ProjectSlider from "../components/ProjectSliderEffect/ProjectSlider";
import ProjectSliderv2 from "../components/ProjectSliderEffect/ProjectSliderv2";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">Description for {projectTitle}</p>
      </div>
      {/* <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} /> */}
      <img
        src={`../assets/Website_UnderConstruction_2.png`}
        alt={projectTitle}
        width="400px"
        // height="600px"
      />
    </motion.div>
  );
};

const Projects = () => {
  const sentence1 = "PRO".split("");
  const sentence2 = "JECTS".split("");

  return (
    <section id="projects" className="pt-28 pb-28">
      {/* Headings */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-anton font-semibold text-5xl">
            <span className="text-red">
              {sentence1.map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </span>
            {sentence2.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-5 mb-7">HERE ARE SOME OF MY WORKS</p>
      </motion.div>

      {/* Projects */}
      {/* <div className="flex justify-center"> */}
        {/* <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        > */}
          {/* Row 1 */}
          {/* <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            Beautiful User Interfaces
          </div>
          <Project title="Project 1" />
          <Project title="Project 2" /> */}

          {/* Row 2 */}
          {/* <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" /> */}

          {/* Row 3 */}
          {/* <Project title="Project 6" />
          <Project title="Project 7" />

          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            Smooth User Experience
          </div>
        </motion.div> */}

        {/* Projects v2 SLIDER*/}

        <ProjectSlider />
        {/* <ProjectSliderv2 /> */}

      {/* </div> */}
    </section>
  );
};

export default Projects;
