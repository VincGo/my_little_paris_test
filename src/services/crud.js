import axios from "axios";

const crud = {

  async post (data) {
    try {
      const response = await axios
        .post("https://61bb0826e943920017784bb1.mockapi.io/api/v1/suscribers", data)
      return response.data
    } catch (err) {
      console.error(err)
    }
  }

}

export default crud