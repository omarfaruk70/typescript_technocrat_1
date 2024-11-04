{
  //
  // interface
  //type vs interface (with extends)

  type User1 = {  // type starts with type keyword, then type name with capital word and equal
    name: string;
    age: number;
  };
 type User1withRole = User1 & {role: string} //intersection
 const userOne:User1withRole = {
    name: "Omar Faruk",
    age: 23,
    role: "Software Developer"
 }



  interface User2 {
    // interface starts with interfacae keyword, then named with capital word and then initialize a objects
    name: string;
    age: number;
  }

  interface user2WithRole extends User2 {
    role: string
  }
  const userTwo:user2WithRole ={
    name: "Omar Faruk",
    age: 23,
    role: "Software Developer"
  }

//   using interface in array
  type Roll1 =  [];
  interface roll2 {
    [index: number] : number
  }
  const rolls:roll2 = [1,2,3];

  //   difference with type alias and interface
  // type works with premetive (string, number, boolean) data. example
  //   type Num1 = string,
  // interface will not work with premetive type data . because it has no equal . it starts with {}. examples
  // interface Num2 {} // how >>? it can't
  //


//   clearer code or best practise (recommended)
// array , function => type alias
// simple object => type alias , complex object => interface
}

