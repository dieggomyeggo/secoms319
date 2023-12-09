const createUser = async (e, p, u, setUser) => {
  await fetch("http://localhost:8081/createUser", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username: u,
      email: e,
      password: p,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
    });
};

const login = async (e, p, setUser) => {
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
    .then((response) => {
      return response.json();
    })
    .then((data) => setUser(data));
};

export { login, createUser };
