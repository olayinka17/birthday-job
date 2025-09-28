const schedule = require("node-schedule");
const User = require("./model/user");
const Email = require("./utils/Email");

const birthdays = async () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  try {
    const users = await User.find({ Month: month, Day: day });
    users.forEach((user) => {
      new Email(user).sendEmail();
    });
  } catch (err) {
    console.log(err);
  }
};

schedule.scheduleJob('* * * * *', () => {
  console.log("job starting......");
  birthdays();
});

