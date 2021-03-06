/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function CenteredFooter({ links, socials, light }) {
  // const { href, name } = company;

  const year = new Date().getFullYear();

  const renderLinks = links.map((link) => (
    <MKTypography
      key={link.name}
      component={Link}
      href={link.href}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {link.name}
    </MKTypography>
  ));

  const renderSocials = socials.map((social) => (
    <MKTypography
      key={social.link}
      component={Link}
      href={social.link}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {social.icon}
    </MKTypography>
  ));

  return (
    <MKBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 2, lg: 3, xl: 6 }}
            mb={3}
          >
            {renderLinks}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
            {renderSocials}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <MKTypography variant="body2" color={light ? "white" : "secondary"}>
            Copyright &copy; {year} FH-Medics by Said Mmevela
            {/* <MKTypography
              component={Link}
              href={href}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color={light ? "white" : "secondary"}
            >
              {name}
            </MKTypography> */}
            .
          </MKTypography>
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Setting default values for the props of CenteredFooter
CenteredFooter.defaultProps = {
  // company: { href: "https://www.creative-tim.com/", name: "Creative Tim" },
  links: [
    { href: "https://homemedic.herokuapp.com/", name: "Company" },
    { href: "https://homemedic.herokuapp.com/pages/landing-pages/about-us", name: "About Us" },
    { href: "https://homemedic.herokuapp.com/presentation", name: "Team" },
    { href: "https://homemedic.herokuapp.com/", name: "Products" },
    { href: "https://homemedic.herokuapp.com/", name: "Blog" },
    { href: "https://homemedic.herokuapp.com/", name: "License" },
  ],
  socials: [
    { icon: <FacebookIcon fontSize="small" />, link: "https://www.facebook.com/" },
    {
      icon: <TwitterIcon fontSize="small" />,
      link: "https://twitter.com/",
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <PinterestIcon fontSize="small" />,
      link: "https://ro.pinterest.com/",
    },
    { icon: <GitHubIcon fontSize="small" />, link: "https://github.com/" },
  ],
  light: false,
};

// Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  // company: Object(PropTypes.string),
  links: Array(Object),
  socials: Array(Object),
  light: PropTypes.bool,
};

export default CenteredFooter;
