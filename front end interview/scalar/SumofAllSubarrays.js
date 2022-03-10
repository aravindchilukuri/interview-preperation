function SumofAllSubarrays(Arr) {
  let sum = BigInt(0);
  for (let i = 0; i < Arr.length; i++) {
    sum += BigInt(i + 1) * (Arr.length - 1) * BigInt(Arr[i]);
  }
  return sum;
}
