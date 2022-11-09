const home = (req, res, next) => {
  res.render("home/index");
};

const login = (req, res, next) => {
  res.render("home/login");
};

module.exports = { home, login };
