import { CurrencyBangladeshiIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef } from "react";

// rrd impports
import { useFetcher } from "react-router-dom";

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef();
  const focusRef = useRef();
  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xm">
          <label htmlFor="newBudget"></label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g.,Groceries"
            required
            ref={focusRef}
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
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <span>Create Budget</span> <CurrencyBangladeshiIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddBudgetForm;
