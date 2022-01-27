import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Laps = () => {

    const [time, setTime] = useState([]);//set time when we fetch using axios
    useEffect(() => {
        Axios.get('/api/time').then(res => {
            const time = res.data;
            setTime(time);
        })
//        console.log(time)
        return () => {
        };
    }, []);

    // converter for mili seconds
    const time_conversion=(t)=>{
        const ms=Math.floor(t%100);
        const s=Math.floor((t/100)%60);
        const min=Math.floor((t/6000))%60;
        const hr=Math.floor((t/(6000*60))%24);
        return(hr+":"+min+":"+s+":"+ms)
    }


    const deleteTime = async id => {
      await Axios.delete(`/api/time/${encodeURIComponent(id)}`)
      setTime(time => time.filter(({ _id }) => _id !== id))
    }


//    const deleteTime = (t) => {
//        let currentTimes = time.filter(e => e.timeStamp !== t);
    //    console.log(t)
    //    console.log(currentTimes)
//        setTime(currentTimes);
//    }

//    console.log(time)
    return (
        <div>
            <h1 className="center-3">Saved Laps</h1>
            <Link to="/"><span className="center-3">Back</span></Link>
            <div className="time-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Time (hr:min:sec:ms)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {time.map(time => (<tr key={time._id}>
                            <td>{time.timeStamp}</td>
                            <td>{time_conversion(time.timeStamp)}</td>
                            <button onClick={()=> {console.log(time);deleteTime(time._id);}} className="single">DELETE</button>
                        </tr>))}
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default Laps;
