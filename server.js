const { create, router, defaults } = require("json-server");

// server.js
const paginationMiddleware = (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const start = (page - 1) * limit;
    const end = page * limit;
    
    req.data = req.data.slice(start, end);
    
    next();
  };
  const server = create();
const routers = router('./db.json');

server.use(defaults());
server.use(paginationMiddleware); // Sử dụng middleware ở đây
server.use(router);

server.listen(8000, () => {
  console.log('JSON Server is running');
});

