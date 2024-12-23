# CS465
SNHU CS-465 C-6 Full Stack Development

Applying the MEAN Stack (i.e., MongoDB, Express, Angular, and Node.js open source tools) to develop the client-side, server-side, and other backend systems for a web application to run effectively.

Module One: Setting up MEAN tools and creating a static website (i.e., no dynamic links, buttons, actions, etc.) with Express using provided assests and altering some lines of code via the course guide.

Module Two: Modifying the file structures to align with an MVC (model, view, controller) architecture, and updating calls for headers and footers to eliminate redundant text using the Handlebars (HBS) tool.

Module Three: Adding a JSON data folder and connections to it for replacing hard-coded data with for-each loops that can dynamically fill similarly formatted templates.

Module Four: Implementing a MongoDB database with its NoSQL schema, and seeding its initial stored data using a JSON file.

Module Five: Applying a RESTful API to access the database, and ensuring the website utilizes it.

Module Six: Creating a single-page application (SPA) for administrators to add and edit trip details.

Module Seven: Enhancing security through token authentication, which also acts as authorization to any user gaining access to the SPA for adding and editing trip information.

Module Eight: Final updates to align and simplify some code, with minor fixes.

Throughout the full stack development of this course, I followed a MEAN architecture, using  the tools that comprise its name. With the frontend development, I created templates using Express to simply populate a website with calls to specified data. These templates allowed for similar website pages to be generated and updatable more quickly than coding each individual page. However, after each HTML edit, the whole system needs to be restarted for them to take effect. JavaScript was used throughout as the coding language, which keeps the MEAN architecture simple. The single-page application (SPA) was constantly being updated while Windows PowerShell was acting as a server. The MongoDB was the NoSQL database used, due to the way data can be stored with more flexibility than a rigid SQL database, requiring exact fields.

JavaScript is a coding language while JSON is for holding data in certain formats. JSON is easily editable, quickly updated, and usually efficient at storing data. Having JavaScript pass JSON files between the frontend and backend through API calls that are written ensures both ends are tied together. Refactoring the HTML code of pages that generated similar items, like the Travel page with multiple trips, by removing repetitive code and setting up loops cleared up some clutter and made UI elements more modular. 

The third-party testing tools of “Postman” and “MongoDBCompass” allowed me to see how certain API calls affected MongoDB. Once connected using Windows PowerShell, I was also able to test how both the frontend website and the SPA functioned. The methods written for the API calls including GET, POST, PUT, and DELETE allow interaction between an authenticated user who receives a security token from a verified party and the database to be modified. The endpoints are specific URLs that are sent these API calls to respond to, which allow communication between the front and backend.

While I am still far from reaching any professional goals, seeing how simple creating a full stack web application using the tools of a MEAN architecture gives me hope that even more advancements are ahead. However, its simplicity worries me more. Especially with AI around the corner most likely able to automate this to a simple prompt. But I digress, as using the tools and being exposed to a full stack development process has made me more aware and marketable in any future computer science field.
