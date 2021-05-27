const csv = require("csv-parse");
const fs = require("fs");
const Customer = require("../models/customer/customer");
const Address = require("../models/customer/address");
const Subscription = require("../models/orders/subscription");

const Impotter = () => {
  const results = [];

  fs.createReadStream("customer.csv")
    .pipe(csv({}))
    .on("data", (data) => results.push(data))
    .on("end", () => {
      results.forEach((result) => {
        console.log(result[0] + "Found");
        let customer = new Customer({
          firstName: result[0],
          lastName: result[1],
          phone: result[2],
          locationID: result[3],
        });
        customer.save(function (err, savedCustomer) {
          console.log(savedCustomer._id, +"Customer Saved");
          let address = new Address({
            name: result[5],
            customerID: savedCustomer._id,
          });
          address.save(function (err, savedAddress) {
            console.log(savedAddress._id + "Address Saved");
            let subscription = new Subscription({
              customerID: savedCustomer._id,
              items: [
                {
                  productID: "60aea6c3cbf953367451d051",
                  quantity: parseInt(result[7], 10),
                },
              ],
              startDate: new Date("2021-05-28"),
              nextDeliveryDate: new Date("2021-05-29"),
              addressID: savedAddress._id,
              status: "ACTIVE",
              frequency: 1,
            });
            subscription.save();
            console.log("Done " + result[0]);
          });
        });
      });
    });
};

module.exports = Impotter;
