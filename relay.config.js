// --src ./src --schema schema/schema.graphql --language typescript --artifactDirectory ./src/__generated__
// relay.config.js
module.exports = {
    src: "./src",
    language: "typescript",
    schema: "schema/schema.graphql",
    artifactDirectory: "./src/__generated__",
    exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
};