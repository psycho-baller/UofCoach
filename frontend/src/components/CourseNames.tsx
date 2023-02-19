import React, { useRef, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

function Course({top=true,children}: any) {

    if (top) {
        return (
            <div className="mr-20 p-5 rounded-3xl drop-shadow-xl bg-orange-50 font-bold border-1  ">{children}</div>
        )
    } else {
        return (
            <div className="mr-20 mt-40 p-5 rounded-3xl drop-shadow-xl bg-orange-50 font-bold border-1 ">{children}</div>
        )
    }
    
}

export default function CourseNames() {
    return (
        <Marquee speed={120} className="pb-10 overflow-hidden">

            <Course top={false} >
                MATH 271
            </Course>

            <Course>
                CPSC 217
            </Course>        

            <Course top={false}>
                MATH 311
            </Course>           

            <Course>
                CPSC 331
            </Course>        

            <Course top={false}>
                SENG 300
            </Course>

            <Course>
                MATH 267
            </Course>


        </Marquee>
    )
}