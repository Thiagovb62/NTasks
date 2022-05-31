module.exports = (app) => {
  app.get("/tasks", (request, response) =>
    response.json({
      Tasks: [{ title: "Fazer compras!" }, { title: "Consertar o pc" }],
    })
  );
};
