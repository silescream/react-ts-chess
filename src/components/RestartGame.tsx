import { FC } from "react";
interface RestartGameProps {
    restart: () => void;
}
export const RestartGame: FC<RestartGameProps> = ({restart}) => {
    return (
        <div>
            <button className = "restart" onClick = {() => restart()}> Restart game</button>
        </div>
    );
}