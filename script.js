const rows = document.querySelectorAll(".project-row");

rows.forEach((row, index) => {
  row.style.setProperty("--delay", `${index * 35}ms`);
});
