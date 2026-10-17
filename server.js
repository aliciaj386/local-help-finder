const express = require("express");
const path = require("path");
const { categories, getResourcesByCategory } = require("./resourceModule");

const app = express();
const PORT = process.env.PORT || 5000;

// Give the browser the category names for its dropdown menu.
app.get("/api/categories", (request, response) => {
  response.json(categories);
});

// Give the browser the sample resources for the category it selected.
app.get("/api/resources", (request, response) => {
  const selectedCategory = request.query.category;

  if (!categories.includes(selectedCategory)) {
    response.status(400).json({
      error: "Please choose one of the available sample categories."
    });
    return;
  }

  response.json(getResourcesByCategory(selectedCategory));
});

// Serve the HTML, CSS, and browser JavaScript from the public folder.
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Local Help Finder is running on port ${PORT}`);
});
