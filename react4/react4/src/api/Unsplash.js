import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID bndDepiUkUMrp8G2THerSm4AFC-_WyNvdZzslKzucQQ",
  },
});
