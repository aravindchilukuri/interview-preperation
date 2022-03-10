function ContainerMaxWater(Arr) {
  let height1 = Math.max(...Arr);
  let height2;
  Arr.sort((a, b) => {
    return a - b;
  });
  for (let i = Arr.length - 1; i >= 0; i--) {
    height2 = Arr[Arr.length - 2];
  }
  return height1 * height2;
}

console.log(ContainerMaxWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
