function cyclicPermutation(S) {
  let base = 26;
  let M = 1e9 + 7;
  let P = S + S;
  pattern_hash = 0;
  text_hash = 0;
  for (let i = 0; i < S.length - 1; i++) {
    pattern_hash = pattern_hash * base + (P[i] % M);
    text_hash = text_hash * base + (S[i] % M);
  }
  count = 0;
  for(i = S.length; i<P.length;i++) {
    if(text_hash === pattern_hash) {
        if(S[])
    }
  }
}
