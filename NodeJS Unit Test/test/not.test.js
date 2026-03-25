test("string.not", ()=> {
  const name = "Fahmi Nugroho";

  expect(name).not.toBe("Fahmi");
  expect(name).not.toEqual("Fahmi");
  expect(name).not.toMatch(/Eko/);
})

test("number.not", () => {
  const value = 2 + 2;
  expect(value).not.toBeGreaterThan(4);
  expect(value).not.toBeGreaterThanOrEqual(5);
  expect(value).not.toBeLessThan(3);
  expect(value).not.toBeLessThanOrEqual(3);
})