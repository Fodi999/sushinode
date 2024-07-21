const cluster = require('cluster');
const os = require('os');
require('dotenv').config();

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;

  console.log(`Master ${process.pid} is running`);
  console.log(`Forking for ${numCPUs} CPUs`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const app = require('./app');
  const PORT = process.env.PORT || 3001;

  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} started, server running on port ${PORT}`);
  });
}







