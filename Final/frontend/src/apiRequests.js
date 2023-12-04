const createUser = (e, p) => {
  fetch("http://localhost:8081/createUser", {
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
    .then((data) => console.log(data));
};

const getUser = (e, p) => {
  fetch("http://localhost:8081/" + e)
    .then((response) => response.json())
    .then((data) => data);
};

export { getUser, createUser };
