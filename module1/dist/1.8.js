"use strict";
// destructuring
{
    const userData = {
        about: {
            firstName: "Omar",
            lastName: "Faruk",
        },
        isActive: true,
        phone: "04456121454",
    };
    const { about: { firstName }, isActive: boolean, } = userData;
    // array distructuring
    const myfriends = ["F1", "F2", "F3", "F4", "F5"];
    const [, , bestfriend, ...rest] = myfriends;
}
