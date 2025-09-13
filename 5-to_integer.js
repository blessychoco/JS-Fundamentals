const firstArg = process.argv[2];
const intArg = parseInt(firstArg, 10);

if (isNaN(intArg)) {
  console.log("Not a number");
}
else {
  console.log("My number: " + intArg);
}