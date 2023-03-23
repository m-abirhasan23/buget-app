import React from 'react'
import ExpensesItem from './ExpensesItem'

const Table = ({expenses}) => {
    const tdata=["Name","Amount","Date"]
  return (
    <div className='table'>
        <table>
            <thead>
                <tr>
{
    tdata.map((i,index)=>(
        <th key={index}>{i} </th>
    ))
}
                </tr>
            </thead>
            <tbody>
                {
                    expenses.map((exp)=>(
                        <tr key={exp.id}>
                           
                            <ExpensesItem
                            exp={exp}
                            />
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table