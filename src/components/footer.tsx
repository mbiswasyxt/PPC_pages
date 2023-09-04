import * as React from "react";

const Footer = ({ _site }) => {
  const { c_footerImage } = _site;
  return (
    <div>
      <img src={c_footerImage.url}></img>
    </div>
  );
};

export default Footer;
