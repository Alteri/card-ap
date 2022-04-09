export const GetDueDate = (dueDate?: string) => {
  const currentDate = new Date().getTime();
  const one_day = 1000 * 60 * 60 * 24;
  let result = 0;
  if (dueDate) {
    const newDueDate = new Date(dueDate).getTime();

    result = Math.ceil((newDueDate - currentDate) / one_day);
  } else {
    const generateDate = new Date(
      new Date().getTime() +
        Math.random() *
          (new Date(2022, 12, 31).getTime() - new Date().getTime())
    ).getTime();

    result = Math.ceil((generateDate - currentDate) / one_day);
  }
  const resultWeek = Math.floor(result / 7);

  switch (true) {
    case result == 0:
      return "Today";
    case result == 1:
      return result + " Day Left";
    case result < 7:
      return result + " Days Left";
    case result >= 14:
      return resultWeek + " Weeks Left";
    case result >= 7:
      return resultWeek + " Week Left";
    default:
      return result;
  }
};
