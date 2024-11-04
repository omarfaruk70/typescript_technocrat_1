{
  // All about (?) mark in typescript
  // ? mark has many names in use case of typescript and they are
  //  ? ======> ternery operator
  // ?? ======> Nullish coalescing Operator
  // ?  ======> conditional rendering 

  // examples.....
  const age = 20;
  const adult = age >= 18 ? "Adult" : "Not adult";
  // console.log(adult);

  // Nullish coalescing operator (??)
  //  ?? is used based on (null and undefined) data types
  // that means kono varriable er value jodi Null or Undefined hoy then amra ekta default value set kore dite parbo
  // example
  const isAuthenticated = null;
  // const isAuthenticated = "";
  // const isAuthenticated = undefined;
  const result1 = isAuthenticated ?? "Guest Mode"; //ans is guest mode
  const result2 = isAuthenticated ? isAuthenticated : "Guest Mode"; //
  console.log({ result1, result2 });
  // ternery operator and nullish coalescing operator are not same.
  // null and undefined value r upor based kore kono default value set korte hole nullish qualescing operator use korte hobe

  // another examples:
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddres: string;
      // permanentAddres: null,
    };
  };

  const user: User = {
    name: "Omar Faruk",
    address: {
      city: "Dhaka",
      road: "Goran 09 no",
      presentAddres: "South Banasree",
      // permanentAddres: null,
    },
  };
  const fulllAddress =
    user?.address?.permanentAddres ?? "Permanent Address Not found";
  console.log(fulllAddress);
}
