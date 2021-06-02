const cron = require("node-cron");
const Subscription = require("../models/orders/subscription");
const Order = require("../models/orders/order");
const Customer = require("../models/customer/customer");
const Location = require("../models/geolocation/location");

const cronTime =
  process.env.CRON_MINUTES + " " + process.env.CRON_HOUR + " * * *";

const Scheduler = () => {
  cron.schedule(cronTime, async () => {
    const tomorrow = new Date();
    const dayAfterTomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    dayAfterTomorrow.setDate(new Date().getDate() + 2);
    const tomorrowQueryDateFormat = tomorrow.toISOString().split("T")[0];
    const dayAfterTomorrowQueryDateFormat = dayAfterTomorrow
      .toISOString()
      .split("T")[0];
    const locationList = await Location.find({});
    try {
      Subscription.find({
        nextDeliveryDate: {
          $gte: new Date(tomorrowQueryDateFormat),
          $lt: new Date(dayAfterTomorrowQueryDateFormat),
        },
        status: "ACTIVE",
      }).then((foundSubscriptions) => {
        foundSubscriptions.map(async (singleSub) => {
          const newDeliveryDate = new Date();
          newDeliveryDate.setDate(
            new Date().getDate() + singleSub.frequency + 1
          );
          const customerForRoute = await Customer.findById(
            singleSub.customerID
          );
          const requiredLocation = locationList.find(
            (foundLocation) => foundLocation._id == customerForRoute.locationID
          );
          let order = new Order({
            customerID: singleSub.customerID,
            routeID: requiredLocation.routeID,
            isSub: true,
            items: singleSub.items,
            deliveryDate: singleSub.nextDeliveryDate,
            addressID: singleSub.addressID,
            status: "ACTIVE",
            comment: "Created by Cron",
          });
          await order.save();
          if (singleSub.endDate) {
            if (
              singleSub.nextDeliveryDate.toISOString() ===
              singleSub.endDate.toISOString()
            ) {
              return Subscription.findByIdAndUpdate(singleSub._id, {
                status: "COMPLETED",
              });
            } else {
              return Subscription.findByIdAndUpdate(singleSub._id, {
                nextDeliveryDate: newDeliveryDate,
              });
            }
          } else {
            return Subscription.findByIdAndUpdate(singleSub._id, {
              nextDeliveryDate: newDeliveryDate,
            });
          }
        });
      });
    } catch (e) {
      console.log(e);
    }
  });
};

module.exports = Scheduler;
