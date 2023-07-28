import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import Card from "components/card/Card";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3333/notification");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <Box bg={"tomato"} borderRadius={3} m={5} p={2}>
      {data.map((item) => (
        <div key={item.id}>
          <Card bg={"lightblue"} m={1} p={2}>
            <p>Name: {item.name}</p>
            <p>Type: {item.type}</p>
            <p>Template: {item.template}</p>
            {/* Render other data properties as needed */}
          </Card>
        </div>
      ))}
    </Box>
  );
};

export default DataFetcher;
