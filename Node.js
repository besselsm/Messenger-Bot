app.get('/webhook', function (req, res) {
    if (req.query['hub.verify_token'] === 'ThisIsMyTestToken') {
      res.send(req.query['hub.challenge']);
    } else {
      res.send('Error, wrong validation token');    
    }
  });
