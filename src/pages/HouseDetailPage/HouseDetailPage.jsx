import { useState, useEffect } from "react";
import { getHouse } from "../../api/fetchToApi";
import { useParams } from "react-router-dom";
import HouseCardDetail from "../../components/HouseCardDetail/HouseCardDetail";


const HouseDetailPage = () => {
    const [house, setHouse] = useState([]);
    let {id} = useParams ("id");

    useEffect(() => {
        if (id)
          getHouse(id).then((data) => {
            setHouse(data);
          });
      }, []);

      return (
        <div>
          {house.length !== 0 ? <HouseCardDetail house={house} /> : null }
        </div>
      );
    
    };

    export default HouseDetailPage;