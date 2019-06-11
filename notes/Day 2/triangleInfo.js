const s1 = parseInt(process.argv[2]);
const s2 = parseInt(process.argv[3]);
const s3 = parseInt(process.argv[4]);

const pMeter = s1 + s2 + s3;
const area = Math.sqrt(pMeter * (pMeter - s1) * (pMeter - s2) * (pMeter - s3)) / 4;


if ( typeof s1 == "number" && typeof s2 == "number" && typeof s3 == "number") { 
  console.log("Perimeter is :" + pMeter);
  console.log("Area is" + area);
} else {
  console.log("Impossible Triangle");
}