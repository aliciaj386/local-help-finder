const categorySelect = document.querySelector("#category-select");
const categoryForm = document.querySelector("#category-form");
const statusMessage = document.querySelector("#status-message");
const resourceList = document.querySelector("#resource-list");
const resultCount = document.querySelector("#result-count");

async function loadCategories() {
  try {
    const response = await fetch("/api/categories");
    const categories = await response.json();

    categorySelect.innerHTML = '<option value="">Choose a category</option>';

    // Add one dropdown option for each category returned by the server.
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });
  } catch (error) {
    categorySelect.innerHTML = '<option value="">Categories unavailable</option>';
    statusMessage.textContent = "The categories could not be loaded. Please refresh the page.";
  }
}

function displayResources(resources) {
  resourceList.innerHTML = "";

  // Create one result card for each resource object.
  resources.forEach((resource) => {
    const card = document.createElement("article");
    card.className = "resource-card";

    const badge = document.createElement("span");
    badge.className = "sample-badge";
    badge.textContent = "FICTIONAL SAMPLE";

    const name = document.createElement("h3");
    name.textContent = resource.name;

    const description = document.createElement("p");
    description.className = "resource-description";
    description.textContent = resource.description;

    const location = document.createElement("p");
    location.className = "resource-location";
    location.textContent = `Example location: ${resource.location}`;

    card.append(badge, name, description, location);
    resourceList.appendChild(card);
  });
}

categoryForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const selectedCategory = categorySelect.value;
  if (!selectedCategory) {
    statusMessage.textContent = "Please choose a category first.";
    return;
  }

  statusMessage.textContent = "Loading sample resources…";
  resourceList.innerHTML = "";
  resultCount.textContent = "";

  try {
    const response = await fetch(
      `/api/resources?category=${encodeURIComponent(selectedCategory)}`
    );
    const resources = await response.json();

    if (!response.ok) {
      throw new Error(resources.error || "The resources could not be loaded.");
    }

    displayResources(resources);
    resultCount.textContent = `${resources.length} examples`;
    statusMessage.textContent = `Showing fictional examples for ${selectedCategory}.`;
  } catch (error) {
    statusMessage.textContent = "The sample resources could not be loaded. Please try again.";
  }
});

loadCategories();
