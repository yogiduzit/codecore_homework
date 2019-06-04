const rows = parseInt(process.argv[2]);

for (let i = 1; i <= rows; i++) {
  for (let j = 4; j > i; j--) {
    process.stdout.write(" ");
  }
  for (let j = 0; j < i; j++) {
    process.stdout.write("#");
    process.stdout.write(" ");
  }
  console.log("");
}