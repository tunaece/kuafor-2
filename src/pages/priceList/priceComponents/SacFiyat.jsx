/* eslint-disable react/jsx-key */
import { useMemo } from "react"
import prices from '../priceLists/SacFiyat.json'
import { useTable } from "react-table"
import '../price.css'

const SacFiyat = () => {
   const data = useMemo(()=> prices ,[] )
   const columns = useMemo(()=>[
      {Header:"İşlem",accessor:"islem"},
      {Header:"Kısa Saç",accessor:"kisa"},
      {Header:"Orta Saç",accessor:"orta"},
      {Header:"Uzun Saç",accessor:"uzun"}
   ],[])
   const {getTableProps,headerGroups,getTableBodyProps,rows,prepareRow,getRowProps,
      getCellProps} = useTable({columns,data})
return (<>
      <h1 className="listHeading">Saç İşlemleri</h1>
   <div className="tableWrapper">
      <table {...getTableProps()}>
         <thead>
            {headerGroups.map((headerGroup)=>(
               <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column)=>(
                     <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                     </th>
                  ))}
               </tr>
            ))}
         </thead>
         <tbody {...getTableBodyProps()}>
            {rows.map((row)=>{
               prepareRow(row)
               return (
                  <tr {...row.getRowProps()}>
                     {row.cells.map((cell)=>(
                        <td {...cell.getCellProps()}>
                           {cell.render('Cell')}
                        </td>
                     ))}
                  </tr>
               )
            })}
         </tbody>
      </table>
</div>
</>
)
}

export default SacFiyat