/* eslint-disable react/prop-types */
import { Children } from "react";

export default function Field({ label, children, htmlFor, error }) {
  const id = htmlFor || getChildId(children);

  return (
    <div className="form-control">
      {label && (
        <label htmlFor={id} className="auth-label">
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <div role="alert" className="text-red-600">
          {error?.message}
        </div>
      )}
    </div>
  );
}

// getting id from children props
const getChildId = (children) => {
  const childEl = Children.only(children);

  // checking for there is any id in children or not!
  if ("id" in childEl.props) {
    return childEl.props.id;
  }
};
