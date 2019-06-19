/*
 * setTimeout: sets the timeout to a number of seconds
 * setTimeout is asynchronous which means that other code
 * will be executing.s
 */
console.time("Yogi");
setTimeout(() => {
  console.log("Yogiduzit")
}, 3000);
console.timeEnd("Yogi");