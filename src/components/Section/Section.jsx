import React from 'react';
import PropTypes from 'prop-types';
import CSS from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={CSS.section}>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
