import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";

const Footer = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <footer className="h-50 bg-blue pt-0">
      <div className="w-10/12 mx-auto">
        {isAboveMediumScreen ? (
          <div className="md:flex justify-center md:justify-between text-center">
            <p className="font-pacifico font-semibold text-4xl mt-8">mll</p>
            <SocialMediaIcons />
          </div>
        ) : (
          <div className="flex justify-between text-center">
            <p className="font-pacifico font-semibold text-4xl mt-8">mll</p>

            <SocialMediaIcons />
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
