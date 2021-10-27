import axios from "axios";

const url = "https://e-commerce-codesandbot.herokuapp.com"

export const Fetchdata = async () => {
    try {
        const { data } = await axios.get(`${url}/products`)
        // console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}

export const GetCart = async () => {
    try {
        const { data } = await axios.get(`${url}/cart`)
        console.log("data>>  ", data);
        return data
    } catch (error) {
        console.log(error);
    }
}

export default Fetchdata;