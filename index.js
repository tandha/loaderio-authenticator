const express = require('express');
const app = express();

app.get('/loaderio-d01ac8bde8314c2fc7b5b47f9f8899e2.txt', (req, res) => {
	res.sendFile('/home/ubuntu/product-overview-service/loaderio-d01ac8bde8314c2fc7b5b47f9f8899e2.txt');
	// res.sendFile('/Users/tanha/RPP33/SDC/product-overview-service/loaderio-07a1310218300c2fc487392e6596ba3b.txt');
});