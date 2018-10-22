import BaseConfig from "./rollup.config.base";
import { name } from "../package.json";

export default {
  ...BaseConfig,
  output: [
    // umd with compress version
    {
      file: `dist/${name}.js`,
      format: "umd",
      name,
      sourcemap: true,
    },
  ],
};
