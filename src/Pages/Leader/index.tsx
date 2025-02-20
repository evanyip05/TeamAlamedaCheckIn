import Backdrop from "../../Components/Backdrop"
import BackSVG from "../../Components/BackSVG";
import HomePage from '../Home';
import { PageSetter } from '../../App';

import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from "react";
import CheckSVG from "../../Components/CheckSVG";

import "./index.css"

function LeaderPage() {
    const [scan, setScan] = useState<any|undefined>()

    return (
        <div style={{width:"100%", height:"100%"}}>
            <div 
                style={{display:"flex", justifyContent:"center", position:"absolute", left:"10px", top:"10px", width:"30px",height:"30px", borderRadius:"15px", backgroundColor:"#fff"}}
                onClick={() => PageSetter(<HomePage/>)}
            >
                <BackSVG/>
            </div>

            <Backdrop src="Meetup.png"/>

            <div style={{display:"flex", justifyContent:"space-evenly", flexDirection:"column", width:"75%", height:"75%", padding:"20px", margin:"auto", backgroundColor:"white", borderRadius:"20px", transform:"translateY(9%)", filter:"drop-shadow(20px 20px 20px #000)"}}>
                <div style={{display:"flex", justifyContent:"center", width:"100%", height:"30%", paddingBottom:"15px", flexGrow:0}}>
                    <img style={{height:"100%", aspectRatio:1}} src="TeamAlamedaLogo.png" alt="" />
                </div>

                <div style={{display:"flex", justifyContent:"center", width:"100%", height:"50%", padding:"20px", flexGrow:0}}>
                    <div style={{display:"flex", justifyContent:"center", height:"100%", aspectRatio:1, borderRadius:"20px", backgroundColor:""}}>
                        {scan===undefined ? 
                            <Scanner styles={{container:{borderRadius:"20px", backgroundColor:"#fff"}, video:{borderRadius:"20px"}}} onScan={(qr) => {
                            try {
                                const json = JSON.parse(qr[0].rawValue)
                                setScan(json)

                                // unset after sending data to the backend, wrap in .then
                                window.setTimeout(() => {
                                    setScan(undefined)
                                }, 1500);
                            } catch (error) {
                                
                            }}}/>
                            : 
                            <div style={{padding:"20px"}}>
                                <CheckSVG/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderPage