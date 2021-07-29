export async function registerList(nameList, exercises) {
  console.log(nameList, exercises);
  const response = await fetch("/api/workouts/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      title: nameList,
      exercises: exercises,
    }),
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function getList(id) {
  const response = await fetch(`/api/workouts/${id}`);
  const body = await response.json();
  return body;
}
