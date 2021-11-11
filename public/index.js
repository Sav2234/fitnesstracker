init();

async function init() {
  let workout;

  if (location.search.split("=")[1] === undefined) {
    workout = await API.getLastWorkout()
    console.log(workout)
  }
  if (workout) {
    location.search = "?id=" + workout._id;
  } else {
    document.querySelector("#continue-btn").classList.add("d-none")
  }
}

