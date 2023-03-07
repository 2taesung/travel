import data from '../data/products';
import Product from '../types/Product';
import tableHeadDisplay from '../data/tableHeadDisplay';

export default function Root() {
  const products: Product[] = data;
  return (
    <>
      <h1>상품 리스트</h1>
      <table>
        <thead>
          <tr>
            {
              Object.keys(products[0]).map((el, i) => {
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
            products.map((el, i) => {
              return (
                <tr></tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}