describe("Home", () => {
  beforeAll(async () => {
    await page.goto("https://google.com");
  });

  it('should be titled "Google"', async () => {
    expect(await page.title()).to.equal("Google");
  });
});
