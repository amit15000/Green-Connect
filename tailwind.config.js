export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
import withMT from "@material-tailwind/react/utils/withMT";
// export const theme = {
//   extend: {
//     backgroundImage: {},
//   },
// };
// export const plugins = [];
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sans-serif"],
        amit: ["Black Han Sans", "sans-serif"],
      },
      backgroundImage: {},
    },
  },
  plugins: [],
});
