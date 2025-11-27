const db = require("../models");

/**
 * @param req
 * @param res
 * @returns {*}
 */

const addCarType = async (req, res) => {
  const car = await db.carsType.build(req.body);
  await car.save();
  await car.reload();
  res.json({ data: car });
};

const updateCarType = async (req, res) => {
  const car = await db.carsType.findByPk(req.body.id);
  car.update(req.body);
  if (car === null) {
    console.log("Not found!");
  } else {
    res.json({ data: car });
  }
};

const getAllCarType = async (req, res) => {
  const car = await db.carsType.findAll(req.body);
  res.json({ data: car });
};

const deleteCarType = async (req, res) => {
  try {
    if (req.body.id) {
      await db.carsType.destroy({ where: { id: req.body.id } });
      console.log("try delete ...");
      res.json({ message: "data supprimé" });
    } else {
      res.json({ message: "id deleted not found" });
    }
  } catch (error) {
    res.json({ message: `${error}` });
  }
};

const getCarTypeById = async (req, res) => {
  const car = await db.carsType.findByPk(req.body.id);
  res.json({ data: car });
};

module.exports = {
  addCarType,
  updateCarType,
  getAllCarType,
  deleteCarType,
  getCarTypeById,
};
