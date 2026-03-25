test("strings", () => {
  const name = "Fahmi Nugroho";

  expect(name).toBe("Fahmi Nugroho")
  expect(name).toEqual("Fahmi Nugroho")
  expect(name).toMatch(/Nugroho/);
 })