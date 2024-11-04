{
  // Function with generics

  // normal typescript function
  // const createArr = (param: string): string[] => {
  //     return [param];
  // };
  // const result1 = createArr("Bangladesh")
  // console.log(result1);

  // function with Generics
  const createArrWithGenerics = <T>(params: T): T[] => {
    // console.log(params);
    return [params];
  };
  const result2 = createArrWithGenerics<string>("New Array");
  const result3 = createArrWithGenerics<number>(123454);
  const result4 = createArrWithGenerics<boolean>(true);
  console.log({ result2, result3, result4 });

  const addCourseToStudent = <T>(student: T) => {
    const courseName = "Next Level web developer";
    return {
      ...student,
      courseName,
    };
  };
  const std1 = addCourseToStudent({
    name: "Omar Faruk",
    email: "farukfci70@gmail.com",
    Exp: 1,
  });
  //
}
