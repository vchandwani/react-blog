import axios from "axios";

async function loadPost(id) {
	try {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/posts/" + id
		);
		if (response.status === 200 && response.data) {
			// response - object, eg { status: 200, message: 'OK' }
			return response.data;
		} else {
			return null;
		}
	} catch (err) {
		return null;
	}
}

export { loadPost };
