module.exports = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({message:"Something Went Wrong!",status:500});
};
