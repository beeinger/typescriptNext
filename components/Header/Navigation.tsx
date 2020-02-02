import { Nav } from "react-bootstrap";
import Size from "../../containers/size";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import HomeIcon from "@material-ui/icons/Home";
import CallIcon from "@material-ui/icons/Call";

export default function Navigation() {
  let size = Size.useContainer();
  return size.size == "large" ? (
    <Nav
      style={{
        fontSize: "1.75rem"
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="textPrimary" href="#home" underline="none">
          Link1
        </Link>
        <Link color="textPrimary" href="#services" underline="none">
          Link2
        </Link>
        <Link color="textPrimary" href="#contact" underline="none">
          Link3
        </Link>
        <Typography color="textSecondary">Blog</Typography>
        {/* <Link color="inherit" href="/blog">
          Blog
        </Link> */}
      </Breadcrumbs>
    </Nav>
  ) : (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="textPrimary" href="#home" underline="none">
        <HomeIcon />
      </Link>
      <Typography color="textSecondary">
        <ChromeReaderModeIcon />
      </Typography>
      {/* <Link color="inherit" href="/blog">
        <ChromeReaderModeIcon />
      </Link> */}
      <Link color="textPrimary" href="#contact" underline="none">
        <CallIcon />
      </Link>
    </Breadcrumbs>
  );
}
