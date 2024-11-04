{
  //
  // promise in typescript
  //   create a promise
  const promiseOne = () => {
    return new Promise<string>((resolve, reject) => {
      const data = "successfull promise executed";
      if (data) {
        resolve(data);
      } else {
        reject("your promise is rejected. Fail to load data.");
      }
    });
  };

  //   call  the promise.
  const showData = async (): Promise<string> => {
    const result1 : string = await promiseOne();
    return result1;
    // console.log(result1);
  };
  showData();


//   we can use data with async await with data type using fatch api , creating a new type, and hangle the type errror

  //
}
