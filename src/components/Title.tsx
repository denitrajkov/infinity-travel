import React from "react";

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center py-lg-5 py-3">
        <div className="col-4 text-end">
          <hr className="line" />
        </div>
        <p className="col-4 text-center f-32-regular m-0">{title}</p>
        <div className="col-4">
          <hr className="line" />
        </div>
      </div>
    </div>
  );
}
