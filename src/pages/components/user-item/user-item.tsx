import React, {FC} from "react";
import {IUser} from "../../../models/IUser";
import {Card} from "../../../shared/components/Card/Card";

interface UserItemProps {
  user: IUser;
  handleClick: (id: number) => void;
}
export const UserItem: FC<UserItemProps> = ({user: {name, id}, handleClick}) => (
    <Card>
        <div className="user__item" onClick={() => handleClick(id)}>{name}</div>
    </Card>
)
