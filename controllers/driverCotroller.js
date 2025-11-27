const db = require('../models')

const userTest = (req, res) => {
    try {
        res.status(200).json({ data: 'tafa @zay', message: 'ok ok nama' })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const addDriver = async (req, res) => {
    console.log(req.body);
    const driver = await db.driver.build(req.body);
    await driver.save();
    await driver.reload();
    res.json({ data: driver });
};

const getAllDriver = async (req, res) => {
  const driver = await db.driver.findAll(req.body);
  res.json({ data: driver });
};

const updateDriver = async (req, res) => {
  const driver = await db.driver.findByPk(req.body.id);
  driver.update(req.body);
  if (driver === null) {
    console.log("Not found!");
  } else {
    res.json({ data: driver });
  }
};

const deleteDriver = async (req, res) => {
    try {
        const driver = await db.driver.findByPk(req.params.id)
        if (user) {
            await driver.destroy({ where: { id: req.params.id } })
            res.status(200).json({ message: 'success' })
        } else {
            res.status(200).json({ message: 'error id' })
        }
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

module.exports = {
    userTest,
    addDriver,
    getAllDriver,
    updateDriver,
    deleteDriver
}