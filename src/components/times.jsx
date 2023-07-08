import { useState, useEffect } from "react";
import { Box, Button, Text, Spinner, Select } from "@chakra-ui/react";
import { bg, bgg, mob } from "../assets";
import axios from "axios";

const Times = ({ api }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(api)
      .then((result) => {
        setData(result.data);
        axios.get(api).then((res) => {
          setData(res.data);
        });
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [api]);

  return (
    <>
      <Box
        bgImage={{base: mob, md:  bgg}}
        bgSize={"cover"}
        h={{ base: "100%", md: "85vh" }}
        bgPosition={"center"}
        w={"100%"}
      >
        <Box
          pt={{ base: "40px", md: "280px", sm: '20px' }}
          w={{ base: "90%", md: "90%" }}
          className="center"
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          gap={{ base: "2rem", md: "2rem" }}
        >
          <Box
            className="filter"
            w={{ base: "80%", md: "250px" }}
            h={{md: "230px", sm: '190px'}}
            border={"1px"}
            borderRadius={"20px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            borderColor={"#6dd5ed"}
            boxShadow="base"
          >
            <Box>
              {loading && (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              )}
            </Box>
            {data ? (
              <Text
                fontSize={{ base: "32px", md: "35px" }}
                color={"#fff"}
                fontWeight={{ base: "500", md: "700" }}
                lineHeight={"normal"}
              >
                {data.times.tong_saharlik}
              </Text>
            ) : null}

            <Text
              fontSize={{ base: "30px", md: "35px" }}
              color={"#fff"}
              fontWeight={{ base: "500", md: "700" }}
              lineHeight={"normal"}
            >
              Bomdod
            </Text>
          </Box>
          <Box
            w={{ base: "80%", md: "250px" }}
            h={{md: "230px", sm: '190px'}}
            border={"1px"}
            borderRadius={"20px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            borderColor={"#6dd5ed"}
            boxShadow="base"
          >
            <Box>
              {loading && (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              )}
            </Box>
            {data ? (
              <Text
                fontSize={{ base: "30px", md: "35px" }}
                color={"#fff"}
                fontWeight={{ base: "400", md: "700" }}
                lineHeight={"normal"}
              >
                {data.times.quyosh}
              </Text>
            ) : null}

            <Text
              fontSize={{ base: "30px", md: "35px" }}
              color={"#fff"}
              fontWeight={{ base: "400", md: "700" }}
              lineHeight={"normal"}
            >
              Quyosh
            </Text>
          </Box>
          <Box
            w={{ base: "80%", md: "250px" }}
            h={{md: "230px", sm: '190px'}}
            border={"1px"}
            borderRadius={"20px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            borderColor={"#6dd5ed"}
            boxShadow="base"
          >
            <Box>
              {loading && (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              )}
            </Box>
            {data ? (
              <Text
                fontSize={{ base: "30px", md: "35px" }}
                color={"#fff"}
                fontWeight={{ base: "400", md: "700" }}
                lineHeight={"normal"}
              >
                {data.times.peshin}
              </Text>
            ) : null}

            <Text
              fontSize={{ base: "30px", md: "35px" }}
              color={"#fff"}
              fontWeight={{ base: "400", md: "700" }}
              lineHeight={"normal"}
            >
              Peshin
            </Text>
          </Box>
          <Box
            w={{ base: "80%", md: "250px" }}
            h={{md: "230px", sm: '190px'}}
            border={"1px"}
            borderRadius={"20px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            borderColor={"#6dd5ed"}
            boxShadow="base"
          >
            <Box>
              {loading && (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              )}
            </Box>
            {data ? (
              <Text
                fontSize={{ base: "30px", md: "35px" }}
                color={"#fff"}
                fontWeight={{ base: "400", md: "700" }}
                lineHeight={"normal"}
              >
                {data.times.asr}
              </Text>
            ) : null}

            <Text
              fontSize={{ base: "30px", md: "35px" }}
              color={"#fff"}
              fontWeight={{ base: "400", md: "700" }}
              lineHeight={"normal"}
            >
              Asr
            </Text>
          </Box>
          <Box
            w={{ base: "80%", md: "250px" }}
            h={{md: "230px", sm: '190px'}}
            border={"1px"}
            borderRadius={"20px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            borderColor={"#6dd5ed"}
            boxShadow="base"
          >
            <Box>
              {loading && (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              )}
            </Box>
            {data ? (
              <Text
                fontSize={{ base: "30px", md: "35px" }}
                color={"#fff"}
                fontWeight={{ base: "400", md: "700" }}
                lineHeight={"normal"}
              >
                {data.times.shom_iftor}
              </Text>
            ) : null}

            <Text
              fontSize={{ base: "30px", md: "35px" }}
              color={"#fff"}
              fontWeight={{ base: "400", md: "700" }}
              lineHeight={"normal"}
            >
              Shom
            </Text>
          </Box>
          <Box
            mb={{ base: "15px", md: "0" }}
            w={{ base: "80%", md: "250px" }}
            h={{md: "230px", sm: '190px'}}
            border={"1px"}
            borderRadius={"20px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            borderColor={"#6dd5ed"}
            boxShadow="base"
          >
            <Box>
              {loading && (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              )}
            </Box>
            {data ? (
              <Text
                fontSize={{ base: "30px", md: "35px" }}
                color={"#fff"}
                fontWeight={{ base: "400", md: "700" }}
                lineHeight={"normal"}
              >
                {data.times.hufton}
              </Text>
            ) : null}

            <Text
              fontSize={{ base: "30px", md: "35px" }}
              color={"#fff"}
              fontWeight={{ base: "400", md: "700" }}
              lineHeight={"normal"}
            >
              Hufton
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Times;
