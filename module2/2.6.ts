{
  //
  // Constrains means Force
  //   mone kori 1st object e isStudent, name, studentId, email ache, arekta object e hondaName, engine, phone number ache
  //   tahole 2 ta object er 1st ta sudent and porer ta student na. so student hote hole kichu field mandatory or required kore dite hobe. ei bepar ta k
  //typescript er vasay constrain bole.
  const addCourseToStudent = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const courseName = "Next Level web developer";
    return {
      ...student,
      courseName,
    };
  };
  const std1 = addCourseToStudent({
    id: 45,
    name: "Omar Faruk",
    email: "farukfci70@gmail.com",
    Exp: 1,
  });
  const std2 = addCourseToStudent({
    id: 211,
    name: "Farhan",
    engine: "ifadMorots",
    active: true,
    brand: "yamaha",
  });

  //
}
