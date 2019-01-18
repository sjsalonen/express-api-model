# express-api-model
Template for a simple REST API written with Node.js and Express.

# How To Use

1. Make sure npm is installed. After cloning the repo, run npm install
2. Run npm start. The app will, by default, run from port **8081**

This API will return programming languages and the author's proficiency of them. The data can be read from file **data/languages.json**

# Routes

**GET /api/languages/** Will return an **array** of all the available programming languages.

**GET /api/languages/id/:id** Returns a single language **object** by id, for example **localhost:8081/api/languages/id/1**. If id is not found, a **404** error is returned.

**GET /api/languages/name?name=:name** Returns a single language **object** by name, taking **name** as a query parameter. For example **localhost:8081/api/languages/name?name=JavaScript**. If name is not found, a **404** error is returned. If no name is given, a **400** error is returned.

**POST /api/languages/sorted** will return all the languages in as sorted array, with the parameters passed in the request body. The body must be a JSON object with the attributes **sortBy** (string) and **order** (string), otherwise a **400** error is returned. At the moment, sorting is possible by either **id** or **name**. If **order** equals to **"desc"**, the array will be returned in descending order. In any other case, ascending order will be used.
