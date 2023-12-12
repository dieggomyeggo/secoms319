const createUser = async (e, p, u, setUser) => {
  await fetch('http://localhost:8081/createUser', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
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

const login = async (e, p, user, setUser, setPage, setMessage) => {
  await fetch(
    `http://localhost:8081/login?${new URLSearchParams({
      email: e,
      password: p,
    })}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.message === 'Wrong password') {
        setMessage(data.message);
      } else if (data.message === 'No email was found') {
        setMessage(data.message);
      } else {
        data.workouts.forEach((id) => {
          getWorkout(id, setUser, data);
        });
        setPage('browse');
      }
    });
};

const getWorkout = async (id, setUser, userData) => {
  await fetch(`http://localhost:8081/getWorkouts/${id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      userData.workouts.push(data);
      setUser(userData);
    });
};

const updateUserWorkout = async (user, workout_ids) => {
  await fetch(`http://localhost:8081/updateUserWorkouts?email=${user.email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      workouts: workout_ids,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
    });
};

const createWorkout = async (user, setUser, workoutName) => {
  await fetch(`http://localhost:8081/createWorkout/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
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

const deleteWorkout = async (user, setUser, workout_id) => {
  await fetch(`http://localhost:8081/deleteWorkout/${workout_id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => {
    const workouts = [];
    console.log(workout_id)
    user.workouts.forEach((workout) => {
      if (typeof workout == 'string') {
        if (workout !== workout_id) workouts.push(workout);
      }
    });
    console.log(workouts);
    setUser({ ...user, workouts: workouts });
    updateUserWorkout(user, workouts);

    return res.json();
    // const workouts = user.workouts;
    // const newWorkouts = [];
    // for (let i = 0; i < workouts.length; i++) {
    //   if (workouts[i]._id !== workout_id) {
    //     newWorkouts.push(workouts[i]);
    //   }
    // }
    // setUser({ ...user, workouts: newWorkouts });
    // const workout_ids = [];
    // for (let i = 0; i < newWorkouts.length; i++) {
    //   workout_ids.push(newWorkouts[i]._id);
    // }
  });
};

export { getWorkout, login, createUser, createWorkout, deleteWorkout };
