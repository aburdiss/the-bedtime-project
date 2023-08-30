import React from "react";
import PropTypes from "prop-types";
import "./MainContent.scss";

/**
 * @namespace MainContent
 * @function MainContent
 * @author Alexander Burdiss
 * @since 10/15/21
 * @version 1.0.2
 * @component
 */
export default function MainContent({ children }) {
  return (
    <main className="AppContentContainer" id="mainContent" tabIndex={-1}>
      {children}
    </main>
  );
}

MainContent.propTypes = {
  children: PropTypes.node,
};
