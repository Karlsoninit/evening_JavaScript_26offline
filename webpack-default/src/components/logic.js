import uuidv4 from "uuid/v4";
import products from "../products";

export const add = (a, b) => {
  return a + b;
};

const result = products.map(elem => ({ name: elem, id: uuidv4() }));

export default result;
