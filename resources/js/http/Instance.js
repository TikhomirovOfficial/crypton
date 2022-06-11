import Axios from "axios";

const Instance = Axios.create({
   baseURL: 'https://614f3dbbb4f6d30017b4850a.mockapi.io/'
})
export default Instance