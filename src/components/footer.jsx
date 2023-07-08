import { Box, Text } from '@chakra-ui/react'


const Footer = () => {
  return (
    <Box  w={'100%'} h={'10vh'} bg={'#00FFFF'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
      <Text fontSize={{base: '17px', md: '20px'}} color={'#000'}>Nomoz Vaqtlari</Text>
      <Text fontSize={{base: '17px', md: '20px'}} color={'gray'}>Copyright by Code Wizard 2023</Text>
    </Box>
  )
}

export default Footer
