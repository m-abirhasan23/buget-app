import { CurrencyBangladeshiIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Form } from "react-router-dom";

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <Form method="post" className="grid-sm">
        
        <div className="grid-xm">
        <label htmlFor="newBudget"></label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g.,Groceries"
            required
      
          />
        </div>
        <div className="grid-xm">
        <label htmlFor="newBudgetAmount"></label>
          <input
            type="number"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g. , $350"
            required
            step={0.01}
            inputMode="decimal"
          />
        </div>
        <button type="submit" className="btn btn--dark"><span>Create Budget</span> <CurrencyBangladeshiIcon width={20}/></button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
