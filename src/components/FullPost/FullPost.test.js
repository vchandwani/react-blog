import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FullPost from "./FullPost";
import { findByTestAttr } from "../../../test/testUtils";

Enzyme.configure({ adapter: new Adapter() });

const mockReadMore = jest.fn();

/*
Factory function to create shallow wrapper
*/
const setup = (
	props = {
		id: 4,
	},
	state = { loadedPost: {} }
) => {
	const wrapper = shallow(<FullPost {...props} />);
	state && wrapper.setState(state);
	return wrapper;
};

test("FullPost component renders without error with please select div", () => {
	const wrapper = setup({ props: {} });
	const loadingDiv = findByTestAttr(wrapper, "noResult-div");
	expect(loadingDiv.text()).toBe("Please select a Post!");
});

test("FullPost component renders without No result message", () => {
	const wrapper = setup();
	jest.useFakeTimers();
	const loadingDiv = findByTestAttr(wrapper, "loading-div");
	expect(loadingDiv.text()).toBe("Loading...!");
});

test("FullPost component renders with loaded Post", () => {
	const wrapper = setup();
	jest.useFakeTimers();
	const loadedPost = findByTestAttr(wrapper, "loadedPost-div");
	console.log(loadedPost.debug());
});
