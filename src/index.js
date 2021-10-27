const Thour = document.querySelectorAll(".hour");
const Tminutes = document.querySelectorAll(".minutes");
const Tseconds = document.querySelectorAll(".seconds");
const colorPicker = document.getElementById("colorPicker");
const clock = document.querySelectorAll(".clock");
const labelColorPicker = document.getElementById("labelColorPicker");
const sizePicker = document.getElementById("sizePicker");
const toggleShadow = document.getElementById("toggleShadow");
const shadow = document.querySelector(".clock-shadow");

let currentColor = "rgb(0, 224, 0)";
let currentSize = 80;

const handleColor = () => {
  if (localStorage.getItem("color")) {
    currentColor = localStorage.getItem("color");
  }
  clock.forEach((clock) => {
    clock.style.color = currentColor;
  });
  labelColorPicker.style.background = currentColor;
};

const handleSize = () => {
  if (localStorage.getItem("size")) {
    currentSize = localStorage.getItem("size");
  }
  sizePicker.value = currentSize;
  clock.forEach((clock) => {
    clock.style.fontSize = currentSize / 10 + "em";
  });
};

const handleShadow = () => {
  if (
    localStorage.getItem("shadowOn") === "true" ||
    localStorage.getItem("shadowOn") === null
  ) {
    toggleShadow.checked = true;
    shadow.style.visibility = "visible";
  } else {
    toggleShadow.checked = false;
    shadow.style.visibility = "hidden";
  }
};

handleColor();
handleSize();
handleShadow();

setInterval(() => {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let seconds = today.getSeconds();

  Thour.forEach((h) => {
    h.textContent = `${hour < 10 ? "0" + hour : hour}`;
  });
  Tminutes.forEach((m) => {
    m.textContent = `${minute < 10 ? "0" + minute : minute}`;
  });
  Tseconds.forEach((s) => {
    s.textContent = `${seconds < 10 ? "0" + seconds : seconds}`;
  });

  // document.getElementById("app").innerHTML = `

  //   `;
}, 1000);

colorPicker.addEventListener("change", (e) => {
  clock.forEach((clock) => {
    clock.style.color = e.target.value;
  });
  localStorage.setItem("color", e.target.value);
  labelColorPicker.style.background = e.target.value;
});

sizePicker.addEventListener("change", (e) => {
  clock.forEach((clock) => {
    clock.style.fontSize = e.target.value / 10 + "em";
  });
  localStorage.setItem("size", e.target.value);
});

toggleShadow.addEventListener("click", () => {
  localStorage.setItem("shadowOn", toggleShadow.checked);
  handleShadow();
});
