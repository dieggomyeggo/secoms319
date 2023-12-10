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
        getWorkout(id, user, setUser);
      });
    });
};

const getWorkout = async (id, user, setUser) => {
  const workouts = [];
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
      setUser((prev) =>
        setUser({ ...prev, workouts: [...prev.workouts, data] })
      );
    });
};

const updateUserWorkout = async (user, workout_ids) => {
  await fetch(`http://localhost:8081/updateUserWorkout?email=${user.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      workouts: workout_ids,
    }),
  }).then((res) => {
    return res.json();
  });
};

const createWorkout = async (user, setUser, workoutName) => {
  await fetch(`http://localhost:8081/createWorkout/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: workoutName,
      exercises: [],
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const workouts = user.workouts;
      setUser({
        ...user,
        workouts: [
          ...workouts,
          {
            _id: data.insertedId,
            name: workoutName,
            exercises: [],
          },
        ],
      });

      const workout_ids = [];
      for (let i = 0; i < user.workouts.length; i++) {
        workout_ids.push(user.workouts[i]._id);
      }
      updateUserWorkout(user, workout_ids);
    });
};

export { getWorkout, login, createUser, createWorkout };
