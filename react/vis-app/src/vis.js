import React from 'react';
import { XYPlot, VerticalBarSeries, LineSeries, HorizontalGridLines, VerticalGridLines, XAxis, YAxis, MarkSeries } from 'react-vis';

const data_year_sold = [
    { x: "2011", y: 129 },
    { x: "2012", y: 171 },
    { x: "2013", y: 121 },
    { x: "2014", y: 118 },
    { x: "2015", y: 251 },
    { x: "2016", y: 289 },
    { x: "2017", y: 358 },
    { x: "2018", y: 233 }
];

const data_model_total = [
    { x: "prius", y: 129 },
    { x: "civic_hybrid", y: 171 },
    { x: "e5", y: 121 },
    { x: "e6", y: 118 },
    { x: "i8", y: 251 },
    { x: "i3", y: 289 },
    { x: "i3 94AH", y: 358 },
    { x: "i3S 94AH", y: 233 },
    { x: "x5 xdrive 40e", y: 129 },
    { x: "530e", y: 171 },
    { x: "740e", y: 121 },
    { x: "active Hybrid 7", y: 118 },
    { x: "active Hybrid 5", y: 251 },
    { x: "cooper S All4", y: 289 },
    { x: "q50 H", y: 358 },
    { x: "qx60H", y: 233 },
    { x: "s400 Hybrid Long", y: 358 },
    { x: "s400 Hybrid", y: 233 },
    { x: "ct 200H", y: 129 },
    { x: "rx 450H", y: 171 },
    { x: "nx 300H", y: 121 },
    { x: "gs450H", y: 118 },
    { x: "es300H", y: 251 },
    { x: "cayenne S E- HIBRID", y: 289 },
    { x: "cayenne S HIBRID TIP", y: 358 },
    { x: "panamera 4 E - HYBRID", y: 233 },
];

class Viz extends React.Component {
    render() {
        return (
            <div>
                <XYPlot height={200} width={200} color="red">
                    <VerticalBarSeries data={data_year_sold} />
                    <VerticalBarSeries data={data_year_sold} />
                    <VerticalBarSeries data={data_year_sold} />
                </XYPlot>
                <XYPlot height={200} width={200} stroke="red">
                    <LineSeries data={data_year_sold} />
                    <LineSeries data={data_year_sold} />
                    <LineSeries data={data_year_sold} />
                </XYPlot>
                <XYPlot height={200} width={200} color="red">
                    <MarkSeries data={data_year_sold} />
                    <MarkSeries data={data_year_sold} />
                    <MarkSeries data={data_year_sold} />
                </XYPlot>

            </div >
        )
    }
}
export default Viz;