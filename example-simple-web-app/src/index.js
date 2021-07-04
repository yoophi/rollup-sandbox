import "./index.css";

const test = "my first rollup project.";
const title = document.createElement("h1");

title.classList = "title";

async function comment() {
  return `Hello ${test} async`;
}

const active = async () => {
  const result = await comment();
  title.textContent = result;
  document.body.appendChild(title);
};

active();
