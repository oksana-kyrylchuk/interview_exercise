import React from "react";
import './Card.scss'

type Props = {
    children: JSX.Element | JSX.Element[],
};
export const Card: React.FC<Props> = ({children}: Props) => {
    return <div className="card">{children}</div>
}
