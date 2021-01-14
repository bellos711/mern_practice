import React, {useState} from "react";


const Tabs = (props) =>{
    console.log(props);

    const [selectedIndex, setSelectedIndex] = useState(0);

    if(props.tabItems.length === 0){
        return <h3>No tab items!</h3>
    }

    const tabStyle = {
        padding: 20,
        marginRight: 10,
        border: "2px solid silver",
        marginTop: 20
    }

    const mainContentStyle = {
        width: "50%",
        margin: "0 auto",
        marginTop: 40,
        padding: 20,
        border: "2px solid silver",
        color: "gray"
    }

    return(
        <div style={{marginTop: 40}}>
            <header>
                {props.tabItems.map((tab, i)=>{
                    return(
                        <span 
                        key={i} 
                        style={tabStyle}
                        onClick={(event)=>{
                            //keep track of which index is selected
                            setSelectedIndex(i);
                        }}>
                            {tab.label}
                        </span>
                    );
                })}
            </header>

            <main style={mainContentStyle}>
                <h3>{props.tabItems[selectedIndex].content}</h3>
            </main>
        </div>
    );
};

export default Tabs;