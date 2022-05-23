const express = require('express');
const app = express();
const port = 3000;

app.get('/loaderio-90f0d6bc1512bc90d526124701d2f3dc.txt', (req, res) => {
	res.sendFile('/home/ubuntu/loaderio-authenticator/loaderio-90f0d6bc1512bc90d526124701d2f3dc.txt');
	// res.sendFile('/Users/tanha/RPP33/SDC/product-overview-service/loaderio-07a1310218300c2fc487392e6596ba3b.txt');
});

app.listen(port, () => {
  console.log(`loaderio-authenticator app listening on port ${port}`)
})