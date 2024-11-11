{
  //
  //generic in typescript
  // generic means to create everything generalize for using efficient and multiple use case

  // creating a general type
  // type GenericType<params> = Array<params> // for all usecase like array, number, string etc
  // type GenericType<T> = Array<T> // T means Typescript(Types) which is industry standard
  // normal
  const rollNumbers: number[] = [1, 2, 3, 4, 5, 6];
  // generic type
  // const rollNumbers: number[] = [1,2,3,4,5,6];
  // const rollNumbers: Array<number> = [1,2,3,4,5,6]; generic type
  // normal type
  // const userName : string[] = ["rahim", "karim", "tanha"];
  // generic type
  const userName: string[] = ["rahim", "karim", "tanha"];
  // normal type
  // const boolArr : boolean[] = [true, false, true];
  // generic type
  const boolArr: boolean[] = [true, false, true];

  type GenericType<T> = Array<T>; // T means (type) Typescript which is industry standard for types (reusable)
  const names: GenericType<string> = ["Ab", "Bc", "Cd"];
  const nums: GenericType<number> = [1, 2, 3, 4, 5];
  const tflsy: GenericType<boolean> = [true, false];

  //   generic types in array of object
  const userInfo: GenericType<{ name: string; age: number }> = [
    {
      name: "Mezba",
      age: 40,
    },
    {
      name: "mir",
      age: 55,
    },
    // {
    //   position: "engineer",
    // },
  ];

  //   generic tuple
  type GenericTuple<x, y> = [x, y];
  const manus: GenericTuple<string, string> = ["mr. x", "mr y"];
  const userWithId:GenericTuple<string, number> = ["hello", 122];
  //
}
