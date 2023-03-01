import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const links=[
    {path:"/store",text:"New Products"},
    {path:"/store?category=mens",text:"Mens"},
    {path:"/store?category=womens",text:"Womens"}
]

export default function Links() {
    return (
        <Box w="100%" pos={"absolute"} zIndex={1000} bottom={"4%"} fontSize={10}>
            <Flex w="50%" justify={"space-around"} h="70px" m="auto">
                {links.map((el) => {
                    return (<Link style={{color:"black",fontSize:"15px"}} to={el.path}>{el.text}</Link>)
                })}
            </Flex>
        </Box>
    )
}