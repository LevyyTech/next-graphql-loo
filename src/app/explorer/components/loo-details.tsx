import React, { FC } from "react";

import { getLooById } from "../services";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type Props = {
  id: string;
};

export const LooDetails: FC<Props> = async ({ id }) => {
  const loo = await getLooById(id);

  if (!loo) {
    return (
      <h2 className="text-3xl font-semibold">Select a Loo to see details</h2>
    );
  }

  return (
    <article className="flex flex-col gap-4">
      <h2 className="text-3xl font-semibold">{loo.name}</h2>
      <div className="rounded-lg border border-stone-500 px-2 py-1">
        {!!loo.area.length && (
          <DetailLabel label="Area" value={loo.area[0].name} />
        )}
        <DetailLabel label="Automatic" value={getBooleanLabel(loo.automatic)} />
        <DetailLabel
          label="No Payment"
          value={getBooleanLabel(loo.noPayment)}
        />
        <DetailLabel
          label="Accessible"
          value={getBooleanLabel(loo.accessible)}
        />
        <DetailLabel
          label="Baby Change"
          value={getBooleanLabel(loo.babyChange)}
        />
        <DetailLabel
          label="All Gender"
          value={getBooleanLabel(loo.allGender)}
        />
        <DetailLabel label="Men" value={getBooleanLabel(loo.men)} />
        <DetailLabel label="Women" value={getBooleanLabel(loo.women)} />
        <DetailLabel
          label="Urinal Only"
          value={getBooleanLabel(loo.urinalOnly)}
        />
        {loo.openingTimes && loo.openingTimes.length && (
          <div className="flex flex-col">
            <p className="mt-3 font-semibold">Opening times:</p>
            <ul className="pl-3">
              {loo.openingTimes.map(([open, close], idx) => (
                <li key={`time-${open}-${close}-${idx}`}>
                  {WEEKDAYS[idx]}:{" "}
                  <span className="text-stone-400">
                    {open} - {close}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
};

const DetailLabel: FC<{ value: string; label: string }> = ({
  value,
  label,
}) => {
  return (
    <p>
      {label}: <span className="text-stone-400">{value}</span>
    </p>
  );
};

const getBooleanLabel = (value: boolean | null) => {
  if (value === null) return "-";

  return value ? "Yes" : "No";
};
