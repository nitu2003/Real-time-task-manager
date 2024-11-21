module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('User connected');
  
      socket.on('update-task', (data) => {
        io.emit('task-updated', data); // Broadcast task update
      });
  
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  };
  