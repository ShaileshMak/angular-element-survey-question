const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = ["./dist/runtime.js", "./dist/polyfills.js", "./dist/main.js"];
  await fs.ensureDir("elements").catch((e) => console.log(e));
  await concat(files, "elements/survey-question.js").catch((e) =>
    console.log(e)
  );
  console.info("Elements created successfully!");
})();
