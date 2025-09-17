"use client";           //Tells next.js to run file in browser
import {useRef} from "react";

export type carouselItem = {
     id: string;
     image: string;
     title: string;
     description: string;
     //href: string;   unused for now. maybe future linking?
}

//React function that receives an array of items
export default function Carousel({items }: {items: carouselItem[] }){
    const trackRef = useRef<HTMLDivElement | null>(null);

    //Scrolls track left/right by exactly one card, hence dir union type 1(right) or -1 (left).
    function scrollByIndividualCard(dir: 1 | -1) {
        const elmnt = trackRef.current;         //Gets Document Object Model node from ref
        if(!elmnt) return;                  //In event of no mounted DOM node - stop and don't try to use it

        //Grab the first card to measure its width. Its an HTMLElement
        const first = elmnt.firstElementChild as HTMLElement | null;

        //Gets the CSS gap between files.
        const gap = parseFloat(getComputedStyle(elmnt).columnGap || "");
    }
}