import React, { useEffect ,useState} from 'react'

 const Covid = () => {
     const [data,setData] = useState([]);

    const getCovidData = async () =>{
        try{
            const res=await fetch('https://api.covid19india.org/data.json');
            const actdata = await res.json();
            console.log(actdata.statewise[0]);
            setData(actdata.statewise[0]);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getCovidData();

    },[]);

    return (
        <div className="card">
        <div className="cards">
        <h4><span>our</span> Country</h4>
        <h2>India</h2>
        </div>
        <div className="cards2" >
        <div className="cards" >
        <h4 ><span>Total</span> Recover</h4>
        <h2>{data.recovered}</h2>
        </div>
        </div>
        
        <div className="cards" style={{color: "red"}}>
        <h4><span>Total</span> Conformed</h4>
        <h2>{data.confirmed}</h2>
        </div>
        <div className="cards">
        <h4><span>Total</span> Deaths</h4>
        <h2>{data.deaths}</h2>
        </div>
        <div className="cards">
        <h4><span>Total</span> Active</h4>
        <h2>{data.active}</h2>
        </div>
        <div className="cards">
        <h4><span>Last</span> Update</h4>
        <h2>{data.lastupdatedtime}</h2>
        </div>
        

            
        </div>
    )
}

export default Covid;