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

  // task 10
  const getDisplayName = (name: string | null | undefined): string => {
    return name ?? "Anonymous";
  };
  console.log(getDisplayName("Omar"));
  console.log(getDisplayName(null));
  console.log(getDisplayName(undefined));

  // task 11
  function processData(data: unknown): unknown {
    if (typeof data === "string") {
      return data.toUpperCase();
    } else if (typeof data === "number") {
      return data * data;
    }
    return undefined; // Optional: Return undefined or handle other types if needed
  }

  // Test cases
  console.log(processData("hello")); // Output: "HELLO"
  console.log(processData(5)); // Output: 25
  console.log(processData({})); // Output: undefined
  // task 12
  // function handleError(message: string): never {
  //   throw new Error(message);
  // }
  // task 13
  const genericFunction = <T>(array: T[]): T[] => {
    return Array.from(new Set(array));
  };

  console.log(genericFunction([5, 4, 6, 5, 4, 6, 4, 5, 6]));
  // task 14
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {
          name: "Omar Faruk",
          age: 23,
        };
        resolve(user);
      }, 3000);
    });
  };
  fetchData()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.message);
    });

  // task 15
  // Function to check if the given value is a string
  const isString = (value: unknown): value is string => typeof value === "string" ;

  // Function to print the value in uppercase if it is a string
  const printUpperCase = (value: unknown): void => {
    if (isString(value)) {
      console.log(value.toUpperCase());
    } else {
      console.log("Value is not a string.");
    }
  }
  //
}
