{
  // nullable types in type script

  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("there is nothing to search");
    }
  };
  // searchName("persian");
  searchName(null);

  // unknown types
  const getSpeedinMeterPerSec = (value: unknown) => {
    if (typeof value === "number") {
      const convertedResult = (value * 1000) / 3600;
      console.log(convertedResult);
    }
  };
  getSpeedinMeterPerSec(1200);

  //   never type
  const throwErr = (msg: string):never => {
    throw new Error(msg);
  };
  throwErr("Muskil se error ho gaya");
}
