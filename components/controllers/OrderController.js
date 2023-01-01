const orderModel = require("../models/OrderModel");

exports.getOrders = async () => {
  const orders = await orderModel
    .find()
    .populate("user_id")
    .populate("pay_method_id")
    .populate({path: "cart_id", populate: {path: "product", populate: {path: "product_id"}}})
    .populate("status")
  return orders;
};

exports.getOrder = async (id) => {
  const order = await orderModel.findById(id);
  return order;
};

exports.getOrdersByUser = async (id) => {
  const orders = await orderModel
    .find({ user_id: id })
    .populate("user_id")
    .populate("pay_method_id")
    .populate({path: "cart_id", populate: {path: "product", populate: {path: "product_id"}}})
    .populate("status")
  return orders;
};

exports.insert = async (body) => {
  await orderModel.create({
    user_id: body.user_id,
    pay_method_id: body.pay_method_id,
    cart_id: body.cart_id,
    total_price: body.total_price,
    status: body.orderStatus_id,
  });
};

exports.update = async (id, body) => {
  await orderModel.updateOne(id, {
    status: body.orderStatus_id,
  });
};

exports.delete = async (id) => {
  await orderModel.deleteOne(id)
}
