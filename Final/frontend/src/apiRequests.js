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

const login = async (e, p, user, setUser) => {
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
    .then((data) => {
      setUser(data);
      data.workouts.forEach((id) => {
        getWorkout(id, user, setUser)
      });
    });
};

const getWorkout = async (id, user, setUser) => {
  const workouts = []
  await fetch(`http://localhost:8081/getWorkouts/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      workouts.push(data)
      setUser({ ...user, workouts: workouts });
    });
};

export { getWorkout, login, createUser };
