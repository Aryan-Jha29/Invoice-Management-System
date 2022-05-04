import axios from 'axios';
export const getData = async () => {
    let response = await axios.get("http://localhost:8080/HighRadius-Project/Fetch");
    let data = response.data.Object;
    data.map((Object, index) => ({ ...Object, "id": index }))
    return data;
}

export const advData = async () => {
    let response = await axios.get("http://localhost:8080/HighRadius-Project/AdvanceSearch");
    let data = response.data.Object;
    data.map((Object, index) => ({ ...Object, "id": index }))
    return data;
}