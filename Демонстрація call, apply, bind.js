function showInfo(city, country) {
  console.log(`${this.name} — ${city}, ${country}`);
}

const user = { name: "Volodymyr" };

showInfo.call(user, "Kyiv", "Ukraine");
showInfo.apply(user, ["Lviv", "Ukraine"]);

const bound = showInfo.bind(user, "Odesa");
bound("Ukraine");
