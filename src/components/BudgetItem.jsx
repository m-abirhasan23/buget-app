import React from "react";
import { toast } from "react-toastify";
import {
    calculatedSpentByBudget,
    formatCurrency,
    formatPercentage
} from "../helper";

const BudgetItem = ({ budg }) => {
  const { id, name, amount, color } = budg;
 
  const spent = calculatedSpentByBudget(id);

  if(amount<spent) toast.warning("You Don't have any money")
  return (
    <div className="budget"
    
    style={{
        "--accent":color
    }}
    >
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>

      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)}</small>
        <small>{formatCurrency(amount - spent)}</small>
      </div>
    </div>
  );
};

export default BudgetItem;
