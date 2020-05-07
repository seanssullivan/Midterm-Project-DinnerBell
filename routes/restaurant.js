const express = require('express');
const router  = express.Router();
const sms = require('../sendsms');

module.exports = (db) => {
  router.get('/', (req, res, next) => {
    return db.orders.all(1)
    .then(data => {
      let orders = {
        completed: data.filter(o => o.complete),
        pending: data.filter(o => !o.complete)
      }
      res.render('pages/restaurant', {orders})
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  //Route to update time
  router.post('/:id/confirm', (req, res, next) => {
    const orderId = req.params.id;
    const minute = req.body.estimatedTime;
    db.orders.confirm(orderId, minute);

    // sms.sendMessage(process.env.PHONE, `${minute}`)

  return router;
};
