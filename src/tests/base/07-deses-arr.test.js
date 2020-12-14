import { returnArray } from "../../base/07-deses-arr";

describe("Pruebas de archivo Arrays", () => {
  test("returnArray debe retornar un [string, number] por default", () => {
    const array = returnArray();

    expect(array).toEqual(['ABC', 123]);
  });

  test("returnArray debe retornar un [string, number] usando parametros", () => {
    let string = 'Hola';
    let number = 123;
    
    const [letters, numbers] = returnArray(string, number);

    // expect(array).toEqual(arrayTest);
    expect(typeof(letters)).toBe('string');
    expect(typeof(numbers)).toBe('number');
  });
});
