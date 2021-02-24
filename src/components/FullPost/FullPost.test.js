import React from "react";
import Enzyme, { shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import FullPost from "./FullPost";
import { findByTestAttr } from "../../../test/testUtils";

Enzyme.configure({ adapter: new Adapter() });

/*
Factory function to create shallow wrapper
*/
const setup = (props) => {
	const wrapper = shallow(<FullPost {...props} />);
	return wrapper;
};

describe("FullPost component loaded without data", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			loading: true,
			loadedPost: {},
		});
	});
	test("it renders Loading message when data is being loaded", () => {
		const fullPostComponentLoading = findByTestAttr(wrapper, "loading-div");
		expect(fullPostComponentLoading.exists()).toBe(true);
		expect(fullPostComponentLoading.text()).toBe("Loading...!");
	});
	test("it renders No result div", () => {
		wrapper = setup({ loading: false, loadedPost: {} });
		const fullPostComponentNoResult = findByTestAttr(wrapper, "noResult-div");
		expect(fullPostComponentNoResult.exists()).toBe(true);
		expect(fullPostComponentNoResult.text()).toBe("Please select a Post!");
	});
});

describe("FullPost component loaded with correct data", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			loadedPost: {
				id: 4,
				title: "Title",
				body: "body",
			},
		});
	});
	test("it renders FullPost with correct title ", () => {
		const fullPostComponent = findByTestAttr(wrapper, "loadedPost-div");
		expect(fullPostComponent.exists()).toBe(true);
		const fullPostComponentTitle = findByTestAttr(wrapper, "loadedPost-title");
		expect(fullPostComponentTitle.text()).toBe("Title");
	});
	test("it renders FullPost with correct body ", () => {
		const fullPostComponent = findByTestAttr(wrapper, "loadedPost-div");
		expect(fullPostComponent.exists()).toBe(true);
		const fullPostComponentBody = findByTestAttr(wrapper, "loadedPost-body");
		expect(fullPostComponentBody.text()).toBe("body");
	});
});
