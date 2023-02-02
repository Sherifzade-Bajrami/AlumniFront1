import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Events = ()=>{
    return<>

            <h1>This is Events page</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>DeadLine</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
       
    </>
}