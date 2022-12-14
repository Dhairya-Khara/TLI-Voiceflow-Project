import React, { useState, useEffect} from 'react'
import { Bubble } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Title,
    SubTitle
} from 'chart.js';

ChartJS.register(
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    SubTitle
);

export const options = {
    scales: {
        y: {
            display: false,
        },
        x: {
            display: false,
        }
    }
};

export default function BubbleChart(props) {
    const [data, setData] = useState({})


    let dataSoFar = { "datasets": [] }

    const refreshData = () => {
        for (const intent in props.intents) {
            dataSoFar["datasets"].push({
                label: intent + ", count: " + props.intents[intent][0],
                data: Array.from({ length: 1 }, () => ({
                    x: Math.random() * 600,
                    y: Math.random() * 200,
                    r: props.intents[intent][0] * 20
                })),
            })
        }
        setData(dataSoFar)
    }

    useEffect(() => {
        refreshData()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.intents])

    let size = Object.keys(data).length;
    if (size === 0) {
        return (<p className="inactive">BUBBLE CHART</p>)
    }
    else {
        return (<div>
            <Bubble options={options} data={data} />

        </div>)
    }
}