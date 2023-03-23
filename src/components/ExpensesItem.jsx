import React from 'react'
import { formatCurrency, formatDate } from '../helper'

const ExpensesItem = ({exp}) => {
  return (
    <>
    <td>{exp.name}</td>
    <td>{formatCurrency(exp.amount)}</td>
    <td>{(formatDate(exp.createdAt))}</td>
    </>
  )
}

export default ExpensesItem