const lang = "en";

const resource = {
  name: "Test Object",
  description: "This is a test object.",
};

const sentences = {
  [lang]: {
    title: resource.name,
  },
};

console.log(sentences[lang].title); // Test Object
