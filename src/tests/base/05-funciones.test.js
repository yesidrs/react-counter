import { getUser, getActiveUser } from "../../base/05-funciones";

describe("Pruebas del archivo funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("getActiveUser debe retornar objeto usando los parametros", () => {
    
    const name = "Yesid"

    const activeUserTest = {
      uid: "ABC567",
      username: name,
    };

    const activeUser = getActiveUser(name);

    expect(activeUser).toEqual(activeUserTest);
  });
});
