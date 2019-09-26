export const dva = {
  config: {
    onError(e) {
      e.preventDefault();
      console.error(e.message);
    },
  },
  plugins: [
    require('dva-logger')(),
  ],
};

// export const dva = {
//   config: {
//     onError(err) {
//       err.preventDefault();
//     },
//   },
// };

// export function render(oldRender) {
//   oldRender();
// }
