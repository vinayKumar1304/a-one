const bcrypt = require('bcrypt');
const UserModel = require('../models/user');

const SALT_ROUND = 10;
const sendResp = (res, status, content) => {
  res.status(status);
  res.json(content);
};

module.exports.login = (req, res) => {
  try {
    UserModel.fetch({email: req.body.email}, async (err, resp) => {
      console.log(err);
      if (err !== null) {
        sendResp(res, 500, { message: err});
      }
      console.log(resp);
      if (typeof resp[0] === 'undefined' || typeof resp[0].password === 'undefined') {
        sendResp(res, 407, { message: 'Invalid credential'});
      }
      resp = resp[0];
      const isValid = await bcrypt.compareSync(req.body.password, resp.password);
      if (isValid === false) {
        sendResp(res, 407, { message: 'Invalid credential'});
      }
      sendResp(res, 200, {
        first_name: resp.first_name,
        last_name: resp.last_name,
        email: resp.email,
        gender: resp.gender,
        mobile: resp.mobile,
        dob: resp.dob,
        status: req.body.status
      });
    });
  } catch (err) {
    console.log(err);
    sendResp(res, 500, { message: 'A technical error occured.'});
  }
};

module.exports.register = async (req, res) => {
  try {
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      mobile: req.body.mobile,
      dob: req.body.dob,
      status: req.body.status
    }
    const salt = await bcrypt.genSaltSync(SALT_ROUND);
    user.password = await bcrypt.hashSync(req.body.password, salt);
    UserModel.insert(user, (err, resp) => {
      if (err !== null) {
        sendResp(res, 500, { message: err});
      }
      sendResp(res, 201, { message: 'User has been saved successfully.', insert_id: resp});
    });
  } catch (err) {
    console.log(err);
    sendResp(res, 500, { message: 'A technical error occured.'});
  }
}
