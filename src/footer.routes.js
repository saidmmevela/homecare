// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/icon.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "FH-Medics",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://homemedic.herokuapp.com/pages/landing-pages/about-us" },
        // { name: "freebies", href: "https://homemedic.herokuapp.com/" },
        // { name: "premium tools", href: "https://homemedic.herokuapp.com/" },
        // { name: "blog", href: "https://homemedic.herokuapp.com/" },
      ],
    },
    // {
    //   name: "resources",
    //   items: [
    //     { name: "illustrations", href: "https://iradesign.io/" },
    //     { name: "bits & snippets", href: "https://homemedic.herokuapp.com/" },
    //     { name: "affiliate program", href: "https://homemedic.herokuapp.com/" },
    //   ],
    // },
    // {
    //   name: "help & support",
    //   items: [
    //     { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
    //     { name: "knowledge center", href: "https://homemedic.herokuapp.com/" },
    //     { name: "custom development", href: "https://homemedic.herokuapp.com/" },
    //     { name: "sponsorships", href: "https://homemedic.herokuapp.com/" },
    //   ],
    // },
    // {
    //   name: "legal",
    //   items: [
    //     { name: "terms & conditions", href: "https://homemedic.herokuapp.com/" },
    //     { name: "privacy policy", href: "https://homemedic.herokuapp.com/" },
    //     { name: "licenses (EULA)", href: "https://homemedic.herokuapp.com/" },
    //   ],
    // },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} FH-Medics by Said Mmevela
      {/* <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography> */}
      .
    </MKTypography>
  ),
};
