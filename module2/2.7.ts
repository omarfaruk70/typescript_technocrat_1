{
  //
  //   generic constrain with keyof operator
  type Vehicles = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "Bike" | "Car" | "Ship"; // manually
  //   using keyof operator               // Dynamically
  type Owner2 = keyof Vehicles;
    // const personl:Owner = "Car"

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key:Y) => {
    return obj[key]
  };
  const user1 = {
    name: "MR. X",
    age: 26,
    address: "Dhaka, Bangladesh"
  };
  const car1 = {
    model: "X corolla",
    year: 1292,
    cc: 1500,
  };
  const result1 = getPropertyValue(user1, "name")   // executed because name property is exist user1
  //const result2 = getPropertyValue(user1, "audi")   // error! because audi property isn't exist car1
  //
}
