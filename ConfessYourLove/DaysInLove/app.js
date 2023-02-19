const yourDate = new Date("2019-02-17T00:00:00"),
  music = ["ido", "noinaycoanh", "nguoiamphu"];

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var rootTime = document.querySelector("time");

    document.querySelector("anni").textContent = `${
      yourDate.getDate() > 9 ? yourDate.getDate() : "0" + yourDate.getDate()
    }-${
      yourDate.getMonth() > 8
        ? yourDate.getMonth() + 1
        : "0" + (yourDate.getMonth() + 1)
    }-${yourDate.getFullYear()}`;

    document.querySelector("date").textContent =
      Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) +
      " DAYS";

    function olock() {
      var today = new Date(),
        hrs = Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60) % 24,
        min = Math.floor(Math.floor((today - yourDate) / 1000) / 60) % 60,
        sec = Math.floor((today - yourDate) / 1000) % 60;
      rootTime.textContent = `${hrs > 9 ? hrs : "0" + hrs}:${
        min > 9 ? min : "0" + min
      }:${sec > 9 ? sec : "0" + sec}`;
    }
    olock();

    var timer = setInterval(function () {
      olock();
    }, 1000);

    document
      .querySelector("audio")
      .setAttribute(
        "src",
        `music/${music[Math.floor(Math.random() * music.length)]}.mp3`
      );

    document
      .getElementsByTagName("body")[0]
      .insertAdjacentHTML("beforeend", "<div id='mask'></div>");
  },
  false
);
