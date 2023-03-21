import React from "react";
import { Form } from "react-router-dom";
// library imports
import { UserPlusIcon } from "@heroicons/react/24/solid";
const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Financial freedom is available to those who learn about it and work
          for it.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <button type="submit" className="btn btn--dark">
            <span>Create account </span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Intro;
