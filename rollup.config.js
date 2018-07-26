import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/lib/index.js",
  output: {
    name: "VueAutoStorage",
    file: "dist/vue-auto-storage.esnext.js",
    format: "umd"
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**" // only transpile our source code
    }),
    uglify()
  ],
  sourceMap: false
};
