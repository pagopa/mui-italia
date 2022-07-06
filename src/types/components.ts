import React from "react";

export interface CTA {
  label: string;
  title: string;
  onClick: (e: React.SyntheticEvent) => void;
}
