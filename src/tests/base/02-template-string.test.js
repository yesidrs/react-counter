import "@testing-library/jest-dom";
import { getGreeting } from "../../base/02-template-string";

describe("Prueba de la funcion getGreeting", () => {
  
  test("getGreeting debe retornar un hola Yesid", () => {
    const name = "Yesid";

    const greeting = getGreeting(name);

    expect(greeting).toBe(`Hola ${name}`);
  });

  test("getGreeting debe retornar por defecto Ana", () => {
    const greeting = getGreeting();

    expect(greeting).toBe("Hola Ana");
  });
});
