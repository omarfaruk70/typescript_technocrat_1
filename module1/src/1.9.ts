{
  // Type alias in Typescript
  //  Type alias means , Create a globall types and use it for all types.

  // normal solution code.....
  //   const student1: {
  //     name: string;
  //     studentId: number;
  //     phoneNum: number;
  //     gender: string;
  //     address: string;
  //   } = {
  //     name: "faruk",
  //     studentId: 70,
  //     phoneNum: 170,
  //     gender: "Male",
  //     address: "Dhaka",
  //   };
  //   const student2: {
  //     name: string;
  //     studentId: number;
  //     phoneNum: number;
  //     gender: string;
  //     address?: string;
  //   } = {
  //     name: "faruk",
  //     studentId: 70,
  //     phoneNum: 170,
  //     gender: "Male",
  //   };

  //   solutions with type alias
  type Student = {
    //declear global types
    name: string;
    studentId: number;
    phoneNum: number;
    gender: string;
    address?: string;
  };

  const st1: Student = {
    name: "Arif",
    studentId: 2212,
    phoneNum: 567,
    gender: "male",
  };

  const st2: Student = {
    name: "Hasan",
    studentId: 254,
    phoneNum: 56547,
    gender: "male",
    address: "Dhk",
  };

  //   type alias in varriables

  type IsAdmin = boolean;
  type userEmail = string;

  const isAdmin: IsAdmin = true;
  const email: userEmail = "amitumi@email.com";

  //   Type alias in function

  type Number = (num1: number, num2: number) => number;
  const functionOne: Number = (num1, num2) => num1 + num2;
}
