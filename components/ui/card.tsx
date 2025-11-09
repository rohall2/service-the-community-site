import * as React from "react";
export function Card({ className="", children }:{ className?: string; children: React.ReactNode }) {
  return <div className={`card ${className}`}>{children}</div>;
}
export function CardHeader({ children }:{ children: React.ReactNode }) { return <div className="card-content pb-0">{children}</div>}
export function CardTitle({ children }:{ children: React.ReactNode }) { return <div className="text-lg font-semibold">{children}</div>}
export function CardContent({ className="", children }:{ className?: string; children: React.ReactNode }) { return <div className={`card-content ${className}`}>{children}</div>}
