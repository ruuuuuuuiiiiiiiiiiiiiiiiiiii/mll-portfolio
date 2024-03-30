import SocialMediaIcons from "../components/SocialMediaIcons";
import TextSpan from "../components/TextSpan";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Slider from "../components/Slider";
import CubesEffectx2 from "../components/CubesEffect/CubesEffectx2";
import CubesEffectx4 from "../components/CubesEffect/CubesEffectx4";

const Landing = ({ setSelectedPage }) => {
  const sentence1 = "Mark Louie ".split("");
  const sentence2 = "Laureles".split("");

  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const isAboveMediumMediumScreen = useMediaQuery("(min-width: 1108px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 mt-20 p-0"
    >
      {/* <CustomCursor /> */}
      {/* Image Section */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreen ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] 
                    before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <CubesEffectx4 />
            </motion.div>
          </div>
        ) : (
          <div>
            <CubesEffectx2 />
          </div>
        )}
      </div>

      {/* Main Section */}
      <div className="z-30 basis-1/2 mt-12 md:mt-32">
        {/* headings */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {isAboveMediumMediumScreen ? (
            <p className="text-5xl font-oooh_baby z-10 text-center md:text-start">
              {sentence1.map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
              <span
                className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush 
                            before:absolute before:-left-[35px] before:-top-[140px] before:z-[-1]"
              >
                {sentence2.map((letter, index) => {
                  return (
                    <TextSpan key={index}>
                      {letter === " " ? "\u00A0" : letter}
                    </TextSpan>
                  );
                })}
              </span>
            </p>
          ) : (
            isAboveMediumScreen ? (
              <p className="text-4xl font-oooh_baby z-10 text-center md:text-start">
                {sentence1.map((letter, index) => {
                  return (
                    <TextSpan key={index}>
                      {letter === " " ? "\u00A0" : letter}
                    </TextSpan>
                  );
                })}
                <span
                  className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush_2 
                              before:absolute before:-left-[34px] before:-top-[125px] before:z-[-1] "
                >
                  {sentence2.map((letter, index) => {
                    return (
                      <TextSpan key={index}>
                        {letter === " " ? "\u00A0" : letter}
                      </TextSpan>
                    );
                  })}
                </span>
              </p>
            ) : (
              <p className="p-5 text-4xl font-oooh_baby z-10 text-center md:text-start">
                {sentence1.map((letter, index) => {
                  return (
                    <TextSpan key={index}>
                      {letter === " " ? "\u00A0" : letter}
                    </TextSpan>
                  );
                })}
                <span
                  className="md:relative md:text-deep-blue md:font-semibold z-20 md:before:content-brush  
                              before:absolute before:-left-[35px] before:-top-[140px] before:z-[-1]"
                >
                  {sentence2.map((letter, index) => {
                    return (
                      <TextSpan key={index}>
                        {letter === " " ? "\u00A0" : letter}
                      </TextSpan>
                    );
                  })}
                </span>
              </p>
            )
          )}
          {isAboveMediumMediumScreen ? (
            <p className="mt-20 mb-7 text-xl text-center md:text-start">
              I'm Louie, a Web Developer based in Philippines! I like to explore
              new technologies and try out new things!
            </p>
          ) : (
            isAboveMediumScreen ? (
              <p className="mt-16 mb-7 text-xl text-center md:text-start">
                I'm Louie, a Web Developer based in Philippines! I like to explore
                new technologies and try out new things!
              </p>
            ) : (
              <p className="mt-0 mb-7 text-xl text-center md:text-start">
                I'm Louie, a Web Developer based in Philippines! I like to explore
                new technologies and try out new things!
              </p>
            )
          )}
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainbow-blue text-deep-blue rounded-sm py-3 px-7 font-semibold
                    hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainbow-blue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
        {isAboveMediumScreen ? (
          <div className="md:flex md:justify-start justify-center ml-[-2] mt-5">
            <motion.div
              className="md:w-1/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="font-bebas_neue font-semibold text-3xl">
                Technologies
              </p>
            </motion.div>
          </div>
        ) : (
          <div className="flex md:justify-end justify-center items-center ml-[-2] mt-5">
            <motion.div
              className="md:w-full "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="font-bebas_neue font-semibold text-3xl">
                Technologies
              </p>
            </motion.div>
          </div>
        )}
        <div className="md:flex md:justify-between mt-5 gap-3">
          <motion.div
            className="technology-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Slider />
          </motion.div>
        </div>
      </div>
      {/* <div className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 mt-500 p-0">
            <IsometricDesign />
        </div> */}
    </section>
  );
};

export default Landing;
