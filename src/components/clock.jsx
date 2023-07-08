import { Box, Text } from '@chakra-ui/react'
import { useState } from 'react'


const Clock = () => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const [current, setCurrent] = useState(time)
    const updateTime = () => {
        let time = new Date().toLocaleTimeString()
        setCurrent(time)
    }
    setInterval(updateTime, 1000);
  return (
    <Box w={'100%'} bg={'#FAD5A5'} minHh={'5vh'} p={'8px'}>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'7px'}>
        <Text fontWeight={'400'} fontSize={{base: '16px', md: '20px'}} color={'#fff'}>Hozirgi Vaqt:</Text> 
        <Text fontWeight={'400'} fontSize={{base: '16px', md: '20px'}} color={'#fff'}>{current}</Text>
      </Box>
        <Text textAlign={'center'} fontWeight={'400'} fontSize={{base: '16px', md: '20px'}} color={'#fff'}>Bugungi sana: {date}</Text> 
    </Box>
  )
}

export default Clock
