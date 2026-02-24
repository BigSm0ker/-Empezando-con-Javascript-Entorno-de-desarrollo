import dividir from "./dividir";
describe("Dividir", () => {
  it("deberia dividir dos numeros", () => {
    expect(dividir(6, 2)).toEqual(3);
  });
});
