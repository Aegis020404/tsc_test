import React, {useRef, useState} from 'react';
import {current} from "@reduxjs/toolkit";
import {addCurrentImage, Store} from "../../store/slices/storeSlice";
import {useAppDispatch} from "../../hooks";

interface ImageProps {
    item:Store
}

let currentDroppable: Element | null = null;
let father: Element | null = null;

function enterDroppable(elem: Element) {
    elem.setAttribute("style", "background: pink");
}
function leaveDroppable(elem: Element) {
    elem.removeAttribute("style");
}

const Image_d: React.FC<ImageProps> = ({item}) => {
    const dispatch = useAppDispatch();
    const [render,setRender] = useState(true);
    const ImgRef = useRef<HTMLImageElement>(null);


    function click() {
        dispatch(addCurrentImage(item))
    }
    const handleMouseDown = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        document.addEventListener("mouseup",click)
        e.preventDefault();
        const img = ImgRef.current
        if (!img) return;
        const shiftX = e.clientX - img.getBoundingClientRect().left
        const shiftY = e.clientY - img.getBoundingClientRect().top
        img.style.position = "absolute";
        img.style.zIndex = "1000";
        father = img.parentElement;
        document.body.append(img);

        const moveAt = (pageX: number, pageY: number) => {
            img.style.left = pageX - shiftX + "px";
            img.style.top = pageY - shiftY + "px";
        }
        moveAt(e.pageX, e.pageY);


        const onMouseMove = (e: MouseEvent) => {
            document.removeEventListener("mouseup",click)
            e.preventDefault()
            moveAt(e.pageX, e.pageY);
            img.hidden = true;
            const elemBellow = document.elementFromPoint(e.clientX, e.clientY);
            img.hidden = false
            if (!elemBellow) return;

            const droppableBellow = elemBellow.closest(".droppable");
            if (currentDroppable !== droppableBellow) {
                if (currentDroppable) {
                    leaveDroppable(currentDroppable);
                }
                currentDroppable = droppableBellow;
                if (currentDroppable) {
                    enterDroppable(currentDroppable);
                }
            }
        }
        document.addEventListener("mousemove", onMouseMove);
        img.onmouseup = function () {
            if (currentDroppable) {
                console.log("working")
            }
            father?.append(img);
            setRender(state => !state);
            img.style.position = 'static'
            document.removeEventListener("mousemove", onMouseMove);
            img.onmouseup = null
            return false;
        }
    }
    return (
            <img
                onClick={() => {
                    console.log("suka");
                }}
                alt={item.title}
                src={item.src}
                width={100} height={70}
                ref={ImgRef}
                onMouseDown={handleMouseDown}
                onDragStart={(e) => e.preventDefault()}
                onDragEnd={(e) => e.preventDefault()}
            />

    );
};

export default Image_d;

