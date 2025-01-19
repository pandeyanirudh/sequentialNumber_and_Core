function calculateChunkSum(limit, size, callback) {
   let number = 0;
   function calculateChunk() {
      let chunkSum = 0;
      for (let i = 0; i < size && number <= limit; i++) {
         chunkSum += number;
         number++;
      }
      callback(chunkSum);
      if (number <= limit) {
         setImmediate(calculateChunk);
      }
   }
   calculateChunk();
}
let totalSum = 0;
calculateChunkSum(1000000000, 1000000000, (chunkSum) => {
   totalSum += chunkSum;
});
setImmediate(() => {
   console.log("Total sum", totalSum)
}
);
