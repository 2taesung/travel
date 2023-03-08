import data from '../data/travels';
import Travel from '../types/Travel';
import tableHeadDisplay from '../data/tableHeadDisplay';
import TravelRow from '../components/TravelRow';
import { Flex } from '@chakra-ui/react';

export default function Root() {
  const travels: Travel[] = data;
  return (
    <>
      <h1>상품 리스트</h1>
      <Flex>
        {
          travels.map((el) => {
            return <TravelRow key={el.idx} travel={el}/>
          })
        }
      </Flex>
    </>
  );
}