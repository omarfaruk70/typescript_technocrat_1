{
  //
  // type assertion / type narrowing
  // type assertion means customize vabe better typescript likha
  // let anything : any
  // anything = "Hello guys";
  // (anything as string)
  // anything = true;

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return convertedValue;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = kgToGram(500) as number; // as its return a numbers.
  const result2 = kgToGram("800") as string; // as its return a string.
  //
}

// typescript theke better type jana k type assertions bole
