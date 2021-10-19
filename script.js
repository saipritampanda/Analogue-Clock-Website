setInterval(() => {
  date = new Date();

  hours = date.getHours();
  mins = date.getMinutes();
  secs = date.getSeconds();

  hrotation = 30 * hours + mins / 2 + secs / 120;
  mrotation = 6 * mins + secs / 10;
  srotation = 6 * secs;

  document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;
  document.getElementById("min").style.transform = `rotate(${mrotation}deg)`;
  document.getElementById("sec").style.transform = `rotate(${srotation}deg)`;
}, 1000);
