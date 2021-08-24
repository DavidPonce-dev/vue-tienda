//pseudo DBA local

const userList = [
    {
      email: "asd@asd.asd",
      password: "asdasdasd",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW8iOiJhc2RAYXNkLmFzZCIsIm5hbWUiOiJKaG9uIFNtaXRoIn0.sbFoY_efcpAm1DgLGuLmC04RGayffKtIxQUrHhp-IDU",
    },
    {
      email: "qwe@asd.asd",
      password: "qweqweqwe",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW8iOiJxd2VAYXNkLmFzZCIsIm5hbWUiOiJxd2Vxd2UifQ.qCPyUQq_9pXOzi9qUwprQmlkn88wnIFBe_OVE-RRoK8",
    },
  ];
  
  export const loginSvc = ({ email, password }) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        for (const userOfList of userList) {
          if (userOfList.email == email && userOfList.password == password) {
            delete userOfList.password;
            res(userOfList);
          }
          rej(new Error("Error en los datos ingresados"));
        }
      }, 1000);
    });
  };
  
  export const registerSvc = () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 1000);
    });
  };
  
  export const checkTokenSvc = (token) => {
    return new Promise((res, rej) => {
      for (const userOfList of userList) {
        if (userOfList.token == token) {
          delete userOfList.password;
          res(userOfList);
        }
      }
      rej(new Error("La sesion ha expirado"));
    });
  };
  