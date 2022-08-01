function time() {
  date = new Date();

  month = date.toLocaleString("en-US", { month: "long", day: "numeric" });

  hr = date.getHours();
  if (hr < 10) {
    hr = "0" + hr;
  }

  mm = date.getMinutes();
  if (mm < 10) {
    mm = "0" + mm;
  }

  ss = date.getSeconds();
  if (ss < 10) {
    ss = "0" + ss;
  }

  document.querySelector(".month").innerText = month;
  document.querySelector(".mm").innerText = mm;
  document.querySelector(".hr").innerText = hr;
  document.querySelector(".ss").innerText = ss;

  setTimeout(time, "1000");
}
window.onload = time("ss"); // Событие onload используется как указатель, что веб-страница полностью загружена
