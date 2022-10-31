import React, { FC } from "react";

import "./keyboard-gb.css";

type KeyboardGBProps = {
    style?: string[];
    onKeyDown?: (key: string) => void;
};

export const KeyboardGB: FC<KeyboardGBProps> = ({ style = [], onKeyDown }) => {
    const classes = () => ["keyboard", "keyboard-gb", ...style].join(" ");
    const renderKey = (key: string) => {
        return (
            <span
                className="key"
                key={key}
                onKeyDown={() => onKeyDown && onKeyDown(key)}
            >
                {key}
            </span>
        );
    };
    return (
        <div className={classes()}>
            <div className="keyboard-line">
                {["1", "2", "3", "4"].map((k) => renderKey(k))}
            </div>
            <div className="keyboard-line">
                {["Q", "W", "E", "R"].map((k) => renderKey(k))}
            </div>
            <div className="keyboard-line">
                {["A", "S", "D", "F"].map((k) => renderKey(k))}
            </div>
            <div className="keyboard-line">
                {["Z", "X", "C", "V"].map((k) => renderKey(k))}
            </div>
        </div>
    );
};

export default KeyboardGB;
