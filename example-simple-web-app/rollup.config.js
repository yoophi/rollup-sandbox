import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import autoprefixer from "autoprefixer";
import cssimport from "postcss-import";
import browsersync from "rollup-plugin-browsersync";
import html from "rollup-plugin-generate-html-template";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "umd",
  },
  plugins: [
    browsersync({
      server: "dist",
    }),
    html({
      template: "src/index.html",
      target: "dist/index.html",
    }),
    resolve(),
    commonjs({
      include: "node_modules/**",
    }),
    babel({
      exclude: "node_modules/**",
    }),
    postcss({
      plugins: [cssimport(), autoprefixer()],
    }),
  ],
};
