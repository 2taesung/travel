import Travel from "../types/Travel";
import { Card, CardBody, CardFooter, Image, Stack, Text, Heading, Divider, ButtonGroup, Button, Flex, useDisclosure } from '@chakra-ui/react'
import BasicModal from "./BasicModal";

export default function TravelRow({travel}: {travel: Travel}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
      <Card maxW='sm'>
        <CardBody>
          <Image
            width={300}
            height={300}
            src={travel.mainImage}
            alt="main travel image"
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='sm'>{travel.name}</Heading>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Heading size='sd'>위치:{travel.spaceCategory}</Heading>
              <Heading size='sd'>구매가능갯수:{travel.maximumPurchases}</Heading>
            </Flex>
            <Text>
              {travel.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {travel.price.toLocaleString()}원
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button 
            onClick={() => {
              onOpen();
              console.log(travel.idx)
              if (localStorage.getItem("cart")) {
                const newCart = new Array(localStorage.getItem("cart"));
                newCart.push(String(travel.idx));
                localStorage.setItem("cart", JSON.stringify(newCart))
              } else {
                localStorage.setItem("cart", JSON.stringify([String(travel.idx)]))
              }
            }} 
            variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <BasicModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}