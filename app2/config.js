// @ts-check

const config = {
  endpoint: "https://nvm-cosmos.documents.azure.com:443/",
  key: "qzattpyaQA1ld8P2JY5fdIcbMWLdjY1mDh0ixkcY4eUzXUe4bXc5Bx4mKUnBZB7wrVyjlEeG6IdGTsbbcVn3ZA==",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
