import axios  from "axios"

const form = document.getElementById("registerForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const date_of_birth = document.getElementById("dob").value;

  try {
    const res = await axios.post("/api/v1/user/register", {
      username,
      email,
      date_of_birth,
    });

    alert("User registered successfully!");
    form.reset();
  } catch (error) {
    document.getElementById("errorMsg").textContent =
      error.response?.data?.message || "Something went wrong";
  }
});
