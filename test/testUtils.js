/*
  Return shallow wrapper containg nodes with given data-test value
*/
export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`);
};
