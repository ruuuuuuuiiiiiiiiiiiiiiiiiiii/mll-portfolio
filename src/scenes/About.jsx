import LineGradient from "../components/LineGradient";
import TextSpan from "../components/TextSpan";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnimatedBlockx10 from "../components/AnimatedBlock/AnimatedBlockx10";
import AnimatedBlockx9 from "../components/AnimatedBlock/AnimatedBlockx9";
import AnimatedBlockx8 from "../components/AnimatedBlock/AnimatedBlockx8";
import AnimatedBlockx7 from "../components/AnimatedBlock/AnimatedBlockx7";
import AnimatedBlockx6 from "../components/AnimatedBlock/AnimatedBlockx6";
import AnimatedBlockx5 from "../components/AnimatedBlock/AnimatedBlockx5";
import AnimatedBlockx4 from "../components/AnimatedBlock/AnimatedBlockx4";
import AnimatedBlockx3 from "../components/AnimatedBlock/AnimatedBlockx3";
import AnimatedBlockx2 from "../components/AnimatedBlock/AnimatedBlockx2";
import AnimatedBlockx1 from "../components/AnimatedBlock/AnimatedBlockx1";

const About = () => {
  // Screen Size
  const is2000Screen = useMediaQuery("(min-width: 2000px)");
  const is1900Screen = useMediaQuery("(min-width: 1900px)");
  const is1800Screen = useMediaQuery("(min-width: 1800px)");
  const is1700Screen = useMediaQuery("(min-width: 1700px)");
  const is1600Screen = useMediaQuery("(min-width: 1600px)");
  const is1500Screen = useMediaQuery("(min-width: 1500px)");
  const is1400Screen = useMediaQuery("(min-width: 1400px)");
  const is1300Screen = useMediaQuery("(min-width: 1300px)");
  const is1200Screen = useMediaQuery("(min-width: 1200px)");
  const is1100Screen = useMediaQuery("(min-width: 1100px)");
  const is1000Screen = useMediaQuery("(min-width: 1000px)");
  const is900Screen = useMediaQuery("(min-width: 900px)");
  const is800Screen = useMediaQuery("(min-width: 800px)");
  const is700Screen = useMediaQuery("(min-width: 700px)");
  const is600Screen = useMediaQuery("(min-width: 600px)");
  const is500Screen = useMediaQuery("(min-width: 500px)");
  const is400Screen = useMediaQuery("(min-width: 400px)");
  const is300Screen = useMediaQuery("(min-width: 300px)");
  const is200Screen = useMediaQuery("(min-width: 200px)");

  const is1060Screen = useMediaQuery("(min-width: 1060px)");

  const sentence1 = "ABOUT ".split("");
  const sentence2 = "ME".split("");

  return (
    <section id="about" className="pt-10 pb-24">
      {/* Header and image Section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-anton font-semibold text-5xl mb-5">
            {sentence1.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
            <span className="text-red">
              {sentence2.map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            STOP A MOMENT AND LOOK AT WHO I REALLY AM.
          </p>
        </motion.div>
        <div className="md:w-2/3 mt-16 md:mt-0">
          <div
            className=" font-bebas_neue relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                        before:w-full before:h-full  before:z-[-1] "
          >
            {is2000Screen ? (
              <AnimatedBlockx10 />
            ) : (
              <>
                {is1900Screen ? (
                  <AnimatedBlockx10 />
                ) : (
                  <>
                    {is1800Screen ? (
                      <AnimatedBlockx10 />
                    ) : (
                      <>
                        {is1700Screen ? (
                          <AnimatedBlockx10 />
                        ) : (
                          <>
                            {is1600Screen ? (
                              <AnimatedBlockx9 />
                            ) : (
                              <>
                                {is1500Screen ? (
                                  <AnimatedBlockx8 />
                                ) : (
                                  <>
                                    {is1400Screen ? (
                                      <AnimatedBlockx7 />
                                    ) : (
                                      <>
                                        {is1300Screen ? (
                                          <AnimatedBlockx7 />
                                        ) : (
                                          <>
                                            {is1200Screen ? (
                                              <AnimatedBlockx6 />
                                            ) : (
                                              <>
                                                {is1100Screen ? (
                                                  <AnimatedBlockx5 />
                                                ) : (
                                                  <>
                                                    {is1060Screen ? (
                                                      <AnimatedBlockx5 />
                                                    ) : (
                                                      <>
                                                        {is1000Screen ? (
                                                          <AnimatedBlockx8 />
                                                        ) : (
                                                          <>
                                                            {is900Screen ? (
                                                              <AnimatedBlockx7 />
                                                            ) : (
                                                              <>
                                                                {is800Screen ? (
                                                                  <AnimatedBlockx6 />
                                                                ) : (
                                                                  <>
                                                                    {is700Screen ? (
                                                                      <AnimatedBlockx5 />
                                                                    ) : (
                                                                      <>
                                                                        {is600Screen ? (
                                                                          <AnimatedBlockx4 />
                                                                        ) : (
                                                                          <>
                                                                            {is500Screen ? (
                                                                              <AnimatedBlockx3 />
                                                                            ) : (
                                                                              <>
                                                                                {is400Screen ? (
                                                                                  <AnimatedBlockx2 />
                                                                                ) : (
                                                                                  <>
                                                                                    {is300Screen ? (
                                                                                      <AnimatedBlockx1 />
                                                                                    ) : (
                                                                                      <>

                                                                                      </>
                                                                                    )}
                                                                                  </>
                                                                                )}
                                                                              </>
                                                                            )}
                                                                          </>
                                                                        )}
                                                                      </>
                                                                    )}
                                                                  </>
                                                                )}
                                                              </>
                                                            )}
                                                          </>
                                                        )}
                                                      </>
                                                    )}
                                                  </>
                                                )}
                                              </>
                                            )}
                                          </>
                                        )}
                                      </>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {/* About */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Experience */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-bebas_neue font-semibold text-5xl">01</p>
              <p className="font-anton font-semibold text-4xl">Experience</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          {/* <p className="mt-5">DESCRIPTION 01</p> */}
        </motion.div>

        {/* Innovative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-bebas_neue font-semibold text-5xl">02</p>
              <p className="font-anton font-semibold text-4xl">Innovative</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          {/* <p className="mt-5">DESCRIPTION 02</p> */}
        </motion.div>

        {/* Imaginative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-bebas_neue font-semibold text-5xl">03</p>
              <p className="font-anton font-semibold text-4xl">Imaginative</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          {/* <p className="mt-5">DESCRIPTION 03</p> */}
        </motion.div>

        {/* WILL UPDATE PORTFOLIO FOR MORE DATA ABOUT MY SELF  */}
      </div>
    </section>
  );
};

export default About;
