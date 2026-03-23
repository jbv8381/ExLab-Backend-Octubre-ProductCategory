import { ProductCategory } from "../models/models.js"

const index = async function (req, res) {
  try {
    const productCategories = await ProductCategory.findAll({
      where: { restaurantId: req.params.restaurantId }
    })
    res.json(productCategories)
  } catch (err) {
    res.status(500).send(err)
  }
}

const create = async function (req, res) {
  let newProductCategory = ProductCategory.build(req.body)
  try {
    newProductCategory = await newProductCategory.save()
    res.json(newProductCategory)
  } catch (err) {
    res.status(500).send(err)
  }
}

const destroy = async function (req, res) {
  try {
    const result = await ProductCategory.destroy({ where: { id: req.params.categoryId } })
    let message = ''
    if (result === 1) {
      message = 'Sucessfuly deleted product category id.' + req.params.categoryId
    } else {
      message = 'Could not delete product category.'
    }
    res.json(message)
  } catch (err) {
    res.status(500).send(err)
  }
}

const ProductCategoryController = {
  index,
  create,
  destroy
}

export default ProductCategoryController
