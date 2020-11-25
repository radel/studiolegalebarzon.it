import PropTypes from "prop-types";
import React from "react";

function Layout({ children }) {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center w-full bg-black body-image">
      <div className="h-screen w-full font-sans bg-cover">
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
