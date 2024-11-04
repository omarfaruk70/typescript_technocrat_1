{
    // 
    // Mapped Tyep
    const arrofNum : number[] = [2,1,3,4,5,6,4];
    // const arrofStr : string[] = ["1", "2", "3"];
    const arrofStr : string[] = arrofNum.map(num => num.toString());
    console.log(arrofStr);

    // map types example
    type AreaNum = {
        height: number,
        width: number
    };

    // type Height = AreaNum["height"];
     type AreaNumToStr = {
        // [key in "height" | "width"] : string; //that is the map function in ts.
        [key in keyof AreaNum]: string;  // dynamic mapping
     }

    //  example 1
    type AreaString<T> = {
        [key in keyof T] : T[key]
    };
    const area1: AreaString<{height: string; width: number}> = {
        height: '100',
        width: 50
    }
    // 
}