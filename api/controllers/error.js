module.exports.error404 = (req, res) => {
  res.status(404);
  res.json({'message': 'Request not found'});
  return;
};
