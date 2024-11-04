{
  // spread operator
  const bros1: string[] = ["Mir", "Mizan", "Firoz"];
  const bros2: string[] = ["nahid", "mizan", "tanmoy"];

  bros1.push(...bros2); 
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "mizan"
    };

    const mentors2 = {
        prisma : "Firoz",
        next: "tanmoy",
        cloud: "Nahid"
    };

    const mentorsList = {
        ...mentors1,
        ...mentors2
    };  
    console.log(mentorsList);
      // rest operator

      const greetFriends = (...friends:string[]) => {
        console.log(`hi ${friends}`);
      }
      greetFriends("abul", "Babul", "Kabul", "mabul")
}
