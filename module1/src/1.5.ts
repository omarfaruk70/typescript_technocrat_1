// object in ts
let user: {
  readonly companyName: "TradeData limited", // fixed . its called literal types. here readonly is called access modifier
  firstName: string;
  middleName?: string; // ? is refers an optional data.
  lastName: string;
  isMarried: boolean;
} = {
//   companyName: "Ababil Group", (this is wrong data type)
  companyName: "TradeData limited",
  firstName: "Omar",
  lastName: "Faruk",
  isMarried: false,
};
// user.companyName="hudai"