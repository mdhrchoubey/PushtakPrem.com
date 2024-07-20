import { useState, useEffect } from "react";
import axios from "axios";


const PurchaseHistory=()=>{

    const [history, setHistory]=useState([]);

    const loadData=()=>{
        let url="http://localhost:5002/api/payment/paymentHistory";
        axios.get(url).then((res)=>{
            console.log(res.data.product)
            setHistory(res.data.product)
        })
    }
    useEffect(()=>{
        loadData();
    }, [])

    const myans=history.map((key)=>{
        return(
            <>
            
            <tr className="history">
                <td>{key.name}</td>
                <td>{key.auther}</td>
                <td>{key.address}</td>
                <td>{key.mobile}</td>
                <td>{key.city}</td>
                <td>{key.pin}</td>
                <td>{key.productitems}</td>
                <td>{key.totalproductprice}</td>
                <td>{key.dop}</td>
                <td><button>Change Status</button></td>
            </tr>
            
             {/* name:String, */}
            {/* auther:String,  */}
            {/* address:String, */}
            {/* mobile:Number, */}
            {/* city:String, */}
            {/* pin: Number, */}
            {/* productitems:String, */}
            {/* totalproductprice:Number, */}
            {/* dop:Date */}
            
            </>
        )
    })

    return(
        <>
        <br/><br/>
        <h1>Payment History</h1>
        <br/><br/>
        <section>
            <table style={{
                color:"black",
                }}>
                <tr className="history">
                    <th style={{
                color:"black",
                border:"1px solid"
                }} >Name</th>
                    <th style={{
                color:"black",
                border:"1px solid"
                }}>auther</th>
                    <th style={{
                color:"black",
                border:"1px solid"
                }}>address</th>
                    <th style={{
                color:"black",
                border:"1px solid"
                }}>mobile</th>
                    <th style={{
                color:"black",
                border:"1px solid"
                }}>city</th>
                    <th style={{
                color:"black",
                border:"1px solid"
                }}>pin</th>
                    <th style={{
                color:"black",
                border:"1px solid"
                }}>Items</th>
                    <th style={{
                color:"black",
                border:"1px solid"
                }}>Price</th>
                    <th style={{
                color:"black",
                border:"1px solid"
                }}>Date</th>
                    <th style={{
                color:"black",
                border:"1px solid"
                }}>Status</th>
                </tr>
                {myans}
            </table>
        </section>
        </>
    )
}
export default PurchaseHistory;