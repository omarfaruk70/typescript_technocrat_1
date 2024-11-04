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
  //   const personl:Owner = "Bike"

  const getPropertyValue = () => {};
  //
}
