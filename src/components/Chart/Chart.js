import ChartBar from "./ChartBar";

const Chart  = (props) => {
    const getDataPointValues = props.dataPoints.map((datapoint)=> datapoint.value);
    const maxValue = Math.max(...getDataPointValues);
    return (
        <div className="bg-[#f8dfff] text-center flex justify-around h-40 p-4 rounded-xl">
            {
                props.dataPoints.map((dataPoint) => <ChartBar
                    key = {dataPoint.label}
                    label = {dataPoint.label}
                    value = {dataPoint.value}
                    maxValue = {maxValue}
                />)
            }
        </div>
    )
}

export default Chart;
