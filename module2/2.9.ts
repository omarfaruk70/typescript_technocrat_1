{
    //
    // conditional type
    // jokhn kono ekta type arekta type er upor depends kore code run kore tokhn ta k conditional type bole

    type t1 = string;
    type t2 = null;


    type x = t1 extends string ? true : false; // type x = true
    type y = t2 extends number ? true : t2 extends undefined ? true : any; // type y = any


    // another examples
    type Sheikh = {
        bike: string,
        car: string,
        ship: string
    };

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type hasBike = CheckVehicle<"Bike">;
    //
}