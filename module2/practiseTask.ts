{
  //

  // task 1
  const firstTsCode: string =
    "Hello World, I will complete this course successfully and become a Next level Web Developer!";
  // task 2
  type User1 = {
    name: string;
    age: 22;
    role: "admin" | "user" | "Guest";
  };
  const myFunc = <T>(value: T): T => {
    return value;
  };
  const result: User1 = myFunc<User1>({
    name: "Omar Faruk",
    age: 22,
    role: "Guest",
  });
  console.log(result);
  // task 3
  type Person = {
    name: string;
    address: string;
    hairColor: string;
    eyeColor: string;
    income: number;
    expense: number;
    hobbies: string[];
    familyMembers: {
      name: string;
      relation: string;
    }[];
    job: {
      title: string;
      company: string;
      yearsExperience: number;
    };
    skills: string[];
    maritalStatus: "Single" | "Married" | "Divorced" | "Widowed";
    friends: {
      name: string;
      contact: string;
    }[];
  };
  // task 4
  // Define the Book interface
  interface Book {
    title: string;
    author: string;
    pages: number;
  }

  // Define the Magazine interface
  interface Magazine {
    title: string;
    issue: number;
    publisher: string;
  }

  // Union Type
  type BookOrMagazine = Book | Magazine;

  // Intersection Type
  type BookAndMagazine = Book & Magazine;

  // task 5
  const reverseStr = (str: string): string => {
    return str.split("").reverse().join("");
  };
  const reverseStrResult = reverseStr("Hello Next Dev");
  console.log(reverseStr);

  // task 6
  const sumOfNum = (...number: number[]): number => {
    return number.reduce(
      (previousVal, currentVal) => previousVal + currentVal,
      0
    );
  };
  const arrayofNums = sumOfNum(5, 4, 6, 7, 8);
  // console.log(arrayofNums);

  // task 7
  const typeAssertions = (value: string | number): number => {
    if (typeof value == "string") {
      return value.length;
    } else {
      return value * value;
    }
  };
  const res1 = typeAssertions("hi");
  const res2 = typeAssertions(546);
  console.log({ res1, res2 });

  // task 8
  type User = {
    name: string;
    email: string;
  };

  type Admin = {
    adminLevel: number;
  };

  type AdminUser = User & Admin;

  const user1: AdminUser = {
    name: "Omar Faruk",
    email: "farukfci70@gmail.com",
    adminLevel: 12,
  };

  const describeAdmin = (user: AdminUser) => {
    // console.log(user);
    return user;
  };
  // task 9
  type Address = {
    city?: string;
  };

  type Employee = {
    name: string;
    address?: Address;
  };

  const getEmployeeCity = (employee: Employee): string | undefined => {
    return employee.address?.city;
  };
  const employeeFullDetails: Employee = {
    name: "Omar Faruk",
    address: {
      city: "Dhaka, Bangladesh",
    },
  };
  const firstEmployee = getEmployeeCity(employeeFullDetails);
  // console.log(firstEmployee);
  //
}
