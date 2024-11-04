{
  // Union types in Typescript
  // union types in typecript is || (or) operator in javascript are the same
  // js e || (1ta) and ts e | (1ta) union types / or operator deya lage

  // example
  // type UserInfo = {
  //     name: string,
  //     address: string,
  //     age: number,
  //     phoneNum: number,
  //     blood: "O+" | "A+" | "B+"
  // }
  // const user1 : UserInfo = {
  //     name: "Mahbub",
  //     address : "Gazipur",
  //     age: 23,
  //     phoneNum: 54547,
  //     blood: "O+"
  // }

  // Intersection types in typescript
  // Intersection means common

  // example
  type FrontEndDeveloper = {
    skills: string[];
    designation1: "Front End developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontEndDeveloper & BackendDeveloper; // here & operator is intersection types in ts

  // use case
  const devFaruk: FullStackDeveloper = {
    skills: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "Node JS",
      "Express Js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tailwind",
      "Bootstrap",
      "Typescript",
      "Redux",
      "Next Js",
      "DBMS",
      "SQL",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "AWS",
      "GraphQl",
      "Vitest",
      "Jest",
    ],
    designation1: "Front End developer",
    designation2: "Backend Developer",
  };
}
