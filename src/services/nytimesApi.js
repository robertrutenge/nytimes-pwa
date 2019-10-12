import axios from "axios";

export const getMostPopularStories = async () => {
  const result = axios
    .get(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=RPgRp0orr7Xum8y5VVYUURaXMr6rtkcy"
    )
    .then(({ data }) => data);
  return result;
};
