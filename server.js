const http = require("http");
const app = require("./app");

const server = http.createServer(app);

server.listen(3000, async () => {
	try {
		return "server is running";
	} catch (error) {
		throw new Error(error);
	}
});
