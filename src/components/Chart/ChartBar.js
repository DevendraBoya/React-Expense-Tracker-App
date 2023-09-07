
const ChartBar  = (props) => {
    let fillBarHeight = '0%';
    if(props.maxValue > 0) {
        fillBarHeight= Math.round((props.value/props.maxValue)*100) + '%';
    }
    return (
        <div className="h-full flex flex-col items-center">
            <div className="h-full w-full border bg-[#c3b4f3] overflow-hidden flex flex-col justify-end rounded-xl border-solid border-[#313131]">
                <div 
                className="bg-[#4826b9] w-full transition-all duration-[0.3s] ease-[ease-out]"
                style={{'height': fillBarHeight}}
                ></div>
            </div>
            <div className="font-bold text-[.75rem] text-center ">{props.label}</div>
        </div>
    )
}

export default ChartBar;