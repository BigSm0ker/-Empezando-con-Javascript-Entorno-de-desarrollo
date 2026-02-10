import multiplicar from "./multiplicador";
describe("Multiplicador", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
});