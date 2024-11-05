{
  // utility types
  // pick types means onno kono types theke ekta property tule niye asa.
  type Personl = {
    name: string;
    age: number;
    phone: number;
    bGroup: string;
    email?: string;
  };

  type NameAge = Pick<Personl, "name" | "bGroup">;
  // Omit => baad deya (skip)
  type ContactSkip = Omit<Personl, "name" | "phone">;
  //  required types create required all and remove all optional
  type RequiredAll = Required<Personl>; // required with email
  // partial types ==> remove all required types and make them optional
  type OptionalAll = Partial<Personl>;

  //   readonly property
  type Person2 = {
    name: string;
    work: string;
  };
  type ReadonlyProperty = Readonly<Person2>;
  const person2: ReadonlyProperty = {
    name: "hudai",
    work: "khai dai",
  };
  // person2.name = "asolei nam nai.";

  // record type
  type MyObj = Record<string, string>;
  const newObj: Record<string, unknown> = {};
  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
  };
}
