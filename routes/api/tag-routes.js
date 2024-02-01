const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag
      }]
  })
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Product,
        through: ProductTag
      }]
  })
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: { id: req.params.id }
  })
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: { id: req.params.id }
  })
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
});

module.exports = router;
