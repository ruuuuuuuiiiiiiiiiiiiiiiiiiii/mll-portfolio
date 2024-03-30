import useMediaQuery from "../hooks/useMediaQuery";

const SocialMediaIcons = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <div>
      {isAboveMediumScreen ? (
        <div className="flex justify-center md:justify-start my-10 gap-7">
          <a
            className="hover:opacity-50 transition duration-500"
            href="https://www.linkedin.com/in/mark-louie-laureles/"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="linkedin-link" src="../assets/linkedin.png" />
          </a>
          {/* <a
            className="hover:opacity-50 transition duration-500"
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="twitter-link" src="../assets/twitter.png" />
          </a> */}
          <a
            className="hover:opacity-50 transition duration-500"
            href="https://www.facebook.com/snghu"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="facebook-link" src="../assets/facebook.png" />
          </a>
          {/* <a
            className="hover:opacity-50 transition duration-500"
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="instagram-link" src="../assets/instagram.png" />
          </a> */}
          {/* <a
            className="hover:opacity-50 transition duration-500"
            href="#contact"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="gmail-link" src="../assets/gmail.png" />
          </a> */}
          <a
            className="hover:opacity-50 transition duration-500"
            href="https://github.com/ruuuuuuuiiiiiiiiiiiiiiiiiiii"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="github-link" src="../assets/github.png" />
          </a>
        </div>
      ) : (
        <div className="flex justify-center md:justify-start my-10 gap-7">
          <a
            className="hover:opacity-50 transition duration-500 w-[25px] h-[25px]"
            href="https://www.linkedin.com/in/mark-louie-laureles/"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="linkedin-link" src="../assets/linkedin.png" />
          </a>
          {/* <a
            className="hover:opacity-50 transition duration-500 w-[25px] h-[25px]"
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="twitter-link" src="../assets/twitter.png" />
          </a> */}
          <a
            className="hover:opacity-50 transition duration-500 w-[25px] h-[25px]"
            href="https://www.facebook.com/snghu"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="facebook-link" src="../assets/facebook.png" />
          </a>
          {/* <a
            className="hover:opacity-50 transition duration-500 w-[25px] h-[25px]"
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="instagram-link" src="../assets/instagram.png" />
          </a> */}
          <a
            className="hover:opacity-50 transition duration-500 w-[25px] h-[25px]"
            href="https://github.com/ruuuuuuuiiiiiiiiiiiiiiiiiiii/"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="github-link" src="../assets/github.png" />
          </a>
        </div>
      )}
    </div>
  );
};

export default SocialMediaIcons;
