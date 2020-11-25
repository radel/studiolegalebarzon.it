import PropTypes from "prop-types";
import React from "react";

function Layout({ children }) {
  return (
    <div className="md:h-screen md:overflow-hidden flex items-center justify-center w-full bg-black body-image">
      <div className="md:h-screen w-full font-sans bg-cover">
        <div className="container mx-auto h-full flex flex-1 justify-center items-center">
          { children }
        </div>
    </div>
  </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
