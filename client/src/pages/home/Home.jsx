import { useState, useEffect } from "react";
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import "./home.scss";
import axios from "axios";

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""
                    }`, {
                    headers: {
                        //token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjgyZTliMTNhYjFmNTRkNGQwNzk0NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNzAxOTkyNiwiZXhwIjoxNjI3NDUxOTI2fQ.LuE05bFUigKUxn4fqbN7kcopQf5g28fwaVmLGATjhyw"
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                }
                );
                setLists(res.data);
            }
            catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);
    return (
        <div className="home">
            <Navbar />
            <Featured type={type} setGenre={setGenre} />
            {lists.map((list) => (
                <List key={list._id} list={list} />
            ))}

        </div>
    )
}

export default Home
