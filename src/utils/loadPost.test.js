import { loadPost } from "./loadPost";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
	rest.get("https://jsonplaceholder.typicode.com/posts/1", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				data: {
					userId: 2,
					id: 2,
					title: "Title",
					body: "Body",
				},
			})
		);
	}),
	rest.get("*", (req, res, ctx) => {
		console.error(`Please add request handler for ${req.url.toString()}`);
		return res(
			ctx.status(500),
			ctx.json({ error: "Please add request handler" })
		);
	})
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("Check loadPost api get call with correct data", async () => {
	const loadPostData = await loadPost(1);
	expect(loadPostData.data.userId).toEqual(2);
	expect(loadPostData.data.id).toEqual(2);
	expect(loadPostData.data.title).toEqual("Title");
	expect(loadPostData.data.body).toEqual("Body");
});

test("Check loadPost api get call with wrong data", async () => {
	server.use(
		rest.get(
			"https://jsonplaceholder.typicode.com/posts/2",
			(req, res, ctx) => {
				return res(ctx.status(404));
			}
		)
	);
	await expect(loadPost()).rejects.toThrow("Error");
});
