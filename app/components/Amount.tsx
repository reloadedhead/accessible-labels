import type { PropsWithChildren } from "react";

export type Unit = {
  /** Symbol of the unit of measurement, e.g. CO₂. */
  symbol: string;
  /**
   * Definition of the unit of measurement.
   * Can be a function that takes the amount and defines accordingly
   **/
  definition: string | ((value: number) => string);
  /**
   * Optional function that will format the amount.
   */
  formatter?: (value: number) => string;
};

type Props = {
  /** Unit to define this amount. */
  unit: Unit;
};

/**
 * A simple component that will make units of measurement more accessible.
 */
export default function Amount({ children, unit }: PropsWithChildren<Props>) {
  const title =
    typeof unit.definition === "function"
      ? unit.definition(Number(children))
      : unit.definition;

  const amount = unit.formatter ? unit.formatter(Number(children)) : children;
  return (
    <div>
      <span>{amount}</span>{" "}
      <abbr className="no-underline" title={title}>
        {unit.symbol}
      </abbr>
    </div>
  );
}
