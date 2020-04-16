import React from "react";
import PropTypes from "prop-types";
import styles from "./list.module.css";
import styled from "styled-components";

const BoxSize = styled.li`
  list-style: none;
  border: 1px solid tomato;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const customStyles = (flag) => ({
  title: {
    color: flag ? "red" : "green",
    fontSize: 40,
  },
});

export const List = ({ title, sku, availableSizes, showSize }) => {
  const css = customStyles(false);
  return (
    <div className={showSize ? styles.containerTrue : styles.containerFalse}>
      <h2 style={css.title}>PRODUCTS</h2>
      <li>
        <h2>{title}</h2>
        <img alt="ph" src={require(`../../../products/${sku}_1.jpg`)} />
        <ul className={styles.availableSizes}>
          {showSize ? (
            availableSizes.map((size, indx) => (
              <BoxSize key={indx}>
                <h2>{size}</h2>
              </BoxSize>
            ))
          ) : (
            <p>size not found</p>
          )}
        </ul>
      </li>
    </div>
  );
};

List.defaultProps = {
  title: "default title",
  availableSizes: [],
};

List.propTypes = {
  title: PropTypes.string,
  sku: PropTypes.number,
  availableSizes: PropTypes.array,
};
