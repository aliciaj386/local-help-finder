// These are fictional examples for a class project, not real organizations.
const categories = ["Food", "Utility bills", "Housing", "Financial needs"];

// Each resource is an object with information that the website can display.
const sampleResources = [
  {
    category: "Food",
    name: "Sample Food Resource A",
    description: "A fictional example of a place that could offer grocery support.",
    location: "Example neighborhood"
  },
  {
    category: "Food",
    name: "Sample Food Resource B",
    description: "A fictional example of a community meal program.",
    location: "Example community"
  },
  {
    category: "Utility bills",
    name: "Sample Utility Resource A",
    description: "A fictional example of a program that could help with an electric bill.",
    location: "Example neighborhood"
  },
  {
    category: "Utility bills",
    name: "Sample Utility Resource B",
    description: "A fictional example of a program that could help with heating costs.",
    location: "Example community"
  },
  {
    category: "Housing",
    name: "Sample Housing Resource A",
    description: "A fictional example of a service that could share rental support information.",
    location: "Example neighborhood"
  },
  {
    category: "Housing",
    name: "Sample Housing Resource B",
    description: "A fictional example of a service that could help someone explore shelter options.",
    location: "Example community"
  },
  {
    category: "Financial needs",
    name: "Sample Financial Resource A",
    description: "A fictional example of a service that could offer budgeting guidance.",
    location: "Example neighborhood"
  },
  {
    category: "Financial needs",
    name: "Sample Financial Resource B",
    description: "A fictional example of a service that could explain emergency assistance options.",
    location: "Example community"
  }
];

function getResourcesByCategory(category) {
  const matchingResources = [];

  // Loop through the resource objects and keep the ones in the chosen category.
  for (let i = 0; i < sampleResources.length; i += 1) {
    if (sampleResources[i].category === category) {
      matchingResources.push(sampleResources[i]);
    }
  }

  return matchingResources;
}

// Export the data and function so server.js can use this module.
module.exports = {
  categories,
  getResourcesByCategory
};
