if (process.argv[2] > process.argv[3]) {
  if (process.argv[4] > process.argv[2]) {
    console.log(process.argv[4]);
  } else {
    console.log(process.argv[2])
  }
} else {
  if (process.argv[3] < process.argv[4]){
    console.log(process.argv[4]);
  } else {
    console.log(process.argv[3]);
  }
}