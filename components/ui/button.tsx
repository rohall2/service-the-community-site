import * as React from "react";
import clsx from "clsx";
export function Button({ className, variant="primary", ...props }:{ className?: string, variant?: "primary"|"outline"} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={clsx("btn", variant==="primary" ? "btn-primary" : "btn-outline", className)} {...props} />;
}
