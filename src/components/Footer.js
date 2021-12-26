import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer align="center">
      <small>Copyright &copy; {currentYear} shyamajp. All Rights Reserved.</small>
    </footer>
  );
};

export default Footer;
