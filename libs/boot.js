module.exports = (app) => {
  app.listen(app.get("port"), () => {
    console.log(`listening on port ${app.get("port")}`);
  });
};
