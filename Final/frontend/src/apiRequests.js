const createUser = async (e, p) => {
  await fetch("http://localhost:8081/createUser", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: e,
      password: p,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

const login = async (e, p) => {
  await fetch(
    `http://localhost:8081/login?${new URLSearchParams({
      email: e,
      password: p,
    })}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data
    });
};

export { login, createUser };
