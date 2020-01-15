module.exports = app => {
  const save = (req, res) => {
    res.send("User Save");
  }

  return { save };
}
