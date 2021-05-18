const bcrypt = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Diego",
      email: "diego@rocketseat.com.br",
      password: "123456",
    });

    const compareHash = await bcrypt.compare("123456", user.password_hash);

    expect(compareHash).toBe(true);
  });
});

/*
Test unitarios sao testes de funcoes puras, funcoes puras elas nunca tocam em efeitos colaterais, tipo: chamadas api, cadastro em banco de dados.

*/
