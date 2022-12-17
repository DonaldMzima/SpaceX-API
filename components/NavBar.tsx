import {
  Avatar,
  Box,
  Button,
  Flex,
  Link,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <>
      <Box bg={'#709c84'} height={90} pos="fixed" width="100%" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Avatar
            m={[2, 3]}
            size="2xl"
            src={'https://www.spacex.com/static/images/share.jpg'}
          />

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Link href="/">
                <Button>Logo</Button>
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default NavBar
