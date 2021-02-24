import React from "react";
import Enzyme, { shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Post from "./Post";
import { findByTestAttr } from "../../../test/testUtils";

Enzyme.configure({ adapter: new Adapter() });

const mockReadMore = jest.fn();

/*
Factory function to create shallow wrapper
*/
const setup = (
	props = {
		clicked: mockReadMore,
		content:
			"ullam et saepe reiciendis voluptatem adipisci↵sit amet autem assumenda provident rerum culpa↵quis hic commodi nesciunt rem tenetur doloremque ipsam iure↵quis sunt voluptatem rerum illo velit",
		title: "eum et est occaecati",
	},
	state = null
) => {
	const wrapper = shallow(<Post {...props} />);
	state && wrapper.setState(state);
	return wrapper;
};

test("Post component renders without error", () => {
	const wrapper = setup();
	const postComponent = findByTestAttr(wrapper, "post-div");
	expect(postComponent.length).toBe(1);
});

test("Post component renders with correct truncated Title and Content", () => {
	const wrapper = setup();
	const postTitle = findByTestAttr(wrapper, "post-title");
	const postContent = findByTestAttr(wrapper, "post-content");
	expect(postTitle.text()).toBe("eum et est occaecati");
	expect(postContent.text()).toBe("ullam et saepe reici");
});

test("Post component read more button clicked and untruncated Title and Content displayed", () => {
	const wrapper = setup();
	const readMoreButton = findByTestAttr(wrapper, "post-button");
	readMoreButton.simulate("click");
	const postTitle = findByTestAttr(wrapper, "post-title");
	const postContent = findByTestAttr(wrapper, "post-content");
	expect(postTitle.text()).toBe("eum et est occaecati");
	expect(postContent.text()).toBe(
		"ullam et saepe reiciendis voluptatem adipisci↵sit amet autem assumenda provident rerum culpa↵quis hic commodi nesciunt rem tenetur doloremque ipsam iure↵quis sunt voluptatem rerum illo velit"
	);
});
