const { fetchData, fetchDataError } = require("./index");

test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData(true);
  } catch (error) {
    expect(error).toMatch("error");
  }
});

test("the data is peanut butter", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  await expect(fetchData(true)).rejects.toMatch("error");
});

test("the fetch fails with an error", () => {
  expect.assertions(1);
  return fetchData(true).catch((error) => expect(error).toMatch("error"));
});
