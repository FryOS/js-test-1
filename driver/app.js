const hasLicence = true;
const age = 20;
const isDrunk = true;

const isCanDrive = hasLicence && age >= 18 && !isDrunk;
console.log(
  `${
    isCanDrive
      ? "Водитель может вести машину"
      : "Водитель не может вести машину"
  }`
);
