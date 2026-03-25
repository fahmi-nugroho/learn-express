test("test toBe", () => {
  let name = "Fahmi";
  let hello = `Hello ${name}`;

  expect(hello).toBe("Hello Fahmi");
})

test("test toEqual", () => {
  let person = {
    name: "Fahmi",
    age: 20
  };

  expect(person).toEqual({
    name: "Fahmi",
    age: 20
  });
})