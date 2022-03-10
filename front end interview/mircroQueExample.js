console.log("program start here");

setTimeout(() => {
  console.log("program is waiting here");
}, 0);

Promise.resolve("promise").then(() => {
  console.log("promise executed");
});

console.log("program ends here");
