import React, { useState, createContext } from "react";
import Letter from "./Letter";



const Table = () => {

    return (
        <div className="board">
            {" "}
            {[...Array(6)].map((row: any, i: number) => {
                return (
                    <div key={`${i}`} className="row">
                        {
                            [...Array(5)].map((letter: any, y: number) => {
                                return (
                                    <Letter key={`${i}${y}`} x={y} y={i} />
                                )
                            })
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Table;