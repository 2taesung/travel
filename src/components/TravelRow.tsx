import Travel from "../types/Travel";

export default function TravelRow({travel}: {travel: Travel}) {
  // console.log(travel)
  return (
    <tr>
      <td>{travel.idx}</td>
      <td>{travel.name}</td>
      <td>
        <img
          width={300}
          height={300}
          src={travel.mainImage} 
          alt="main travel image" 
        />
      </td>
      <td>{travel.description}</td>
      <td>{travel.spaceCategory}</td>
      <td>{travel.price}</td>
      <td>{travel.maximumPurchases}</td>
      <td>{travel.registrationDate}</td>
    </tr>
  )
}