{
  //

  //  generic  type with interface
  interface Developer<T = null> {  // here null is default parameter. if no data received with the parameter T. It will be undefined.
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T; // eikhane e amra jani na smartwatch ta ki hobe tai dynamically type make korte hoice generic er maddhome
  }

  // create a varriable
  const poorDeveloper: Developer<{
    brand: string;
    model: string;
  }> = {
    name: "Omar Faruk",
    computer: {
      brand: "HP",
      model: "Corre I",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "TETON",
      model: "kw120",
    },
  };
  const richDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }> = {
    name: "Someone",
    computer: {
      brand: "Apple",
      model: "mini mac",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "apple",
      model: "kw120",
      display: "OLED",
      heartTrack: true,
      sleepTrack: true,
    },
  };

  //   best practise holo code ke simplify kora . like richDeveloer er vitor object ta k ekta type or interface er vitor declear kore then seikhan theke inheri kora .

  // from ==========
  //    const richDeveloper: Developer<{
  //     brand: string;
  //     model: string;
  //     display: string;
  //     heartTrack: boolean;
  //     sleepTrack: boolean;
  //   }> = {
  //     name: "Someone",
  //     computer: {
  //       brand: "Apple",
  //       model: "mini mac",
  //       releaseYear: 2024,
  //     },
  // to ===============

//   type WatchInfo = {
//     brand: string;
//     model: string;
//     display: string;
//     heartTrack: boolean;
//     sleepTrack: boolean;
//   };
  //    const richDeveloper: Developer<WatchInfo> = {
  //     name: "Someone",
  //     computer: {
  //       brand: "Apple",
  //       model: "mini mac",
  //       releaseYear: 2024,
  //     },

//   or =========== 
// /   interface WatchInfo = {
    //     brand: string;
    //     model: string;
    //     display: string;
    //     heartTrack: boolean;
    //     sleepTrack: boolean;
    //   };
      //    const richDeveloper: Developer<WatchInfo> = {
      //     name: "Someone",
      //     computer: {
      //       brand: "Apple",
      //       model: "mini mac",
      //       releaseYear: 2024,
      //     },


    //   its called generic with interface================
}
