import { callMe, MyException } from "../src/exception.js";

test("exceptions", () => {
  expect(() => callMe("Fahmi")).toThrow();
  expect(() => callMe("Fahmi")).toThrow(MyException);
  expect(() => callMe("Fahmi")).toThrow("Nama tidak boleh Fahmi");
})

test("exception not happens", () => {
  expect(callMe("Budi")).toBe("OK");
})