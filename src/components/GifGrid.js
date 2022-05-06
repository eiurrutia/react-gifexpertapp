import React, { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    console.log({ images, loading });

    return(
        <>
            
            <h3>{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid animate__animated animate__fadeIn">
                
                <ol>
                    { 
                        images?.map( (img) => (
                            <GifGridItem 
                                key={img.id}
                                { ...img }
                            />
                        )) 
                    }
                </ol>

            </div>
        </>
    )
}