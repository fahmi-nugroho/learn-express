import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
  const result = await sayHelloAsync("John");
  expect(result).toBe("Hello John");
})

test("test async function with error", async () => {
  await expect(sayHelloAsync('Fahmi')).resolves.toBe("Hello Fahmi");
  await expect(sayHelloAsync()).rejects.toBe("Name is required");
}) 