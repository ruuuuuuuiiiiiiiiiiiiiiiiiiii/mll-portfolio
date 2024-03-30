import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full 
        before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[50%] right-7">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        // onClick={() => setSelectedPage("home")} // fixes issue on DOT group
      />
      {/* <AnchorLink
            href="#skills"
            className={`${
                selectedPage === "skills" ? selectedStyles : "bg-dark-grey" 
                } w-3 h-3 rounded-full`}
            onClick={() => setSelectedPage("skills")}
        /> */}
      <AnchorLink
        href="#projects"
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        // onClick={() => setSelectedPage("projects")} // fixes issue on DOT group
      />
      <AnchorLink
        href="#about"
        className={`${
          selectedPage === "about" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        // onClick={() => setSelectedPage("about")} // fixes issue on DOT group
      />
      {/* <AnchorLink
            href="#testimonials"
            className={`${
                selectedPage === "testimonials" ? selectedStyles : "bg-dark-grey"
                } w-3 h-3 rounded-full`}
            onClick={() => setSelectedPage("testimonials")}
        /> */}
      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        // onClick={() => setSelectedPage("contact")} // fixes issue on DOT group
      />
    </div>
  );
};

export default DotGroup;
