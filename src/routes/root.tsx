import data from '../data/travels';
import Travel from '../types/Travel';
import tableHeadDisplay from '../data/tableHeadDisplay';
import TravelRow from '../components/TravelRow';

export default function Root() {
  const travels: Travel[] = data;
  return (
    <>
      <h1>상품 리스트</h1>
      <table>
        <thead>
          <tr>
            {
              Object.keys(travels[0]).map((el, i) => {
                return (
                  <th
                    key={el}
                  >{tableHeadDisplay.get(el)}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
          </tr>
          {
            travels.map((el) => {
              return <TravelRow key={el.idx} travel={el}/>
            })
          }
        </tbody>
      </table>
    </>
  );
}