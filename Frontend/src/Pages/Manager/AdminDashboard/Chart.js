import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, BarChart , CartesianGrid,LabelList , Bar , Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';


// Generate user Data
function createData(month, amount) {
    return { month,amount };
}

const data = [
    createData('January', 0),
    createData('February', 300),
    createData('March', 600),
    createData('April', 800),
    createData('May', 1500),
    createData('June', 2000),
    createData('July', 2400),
    createData('August', 2400),
    createData('September', 2500),
    createData('October', 2600),
    createData('November', 2700),
    createData('December', 2900),
];

export default function Chart() {
    const theme = useTheme();

    return (
        <React.Fragment >
            <Title>Today</Title>
            <ResponsiveContainer>
                <BarChart
                    width={830}
                    height={400}
                    data={data}
                    margin={{ top: 30, right: 70, left: 20, bottom: 10 }} border='1px solid green'
                    barGap={10}

                >
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey="month" tick={false}  angle={90} label={{value:'Month',position: 'right'}} >
                    </XAxis>
                    <YAxis label={{ value: 'No of Users', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
                    <Bar dataKey="amount" fill="#4695e3">
                        <LabelList dataKey="month" position="insideTop" angle="90"  />
                    </Bar>
                </BarChart>
                {/*<LineChart*/}
                {/*    data={data}*/}
                {/*    margin={{*/}
                {/*        top: 16,*/}
                {/*        right: 16,*/}
                {/*        bottom: 0,*/}
                {/*        left: 24,*/}
                {/*    }}*/}

                {/*>*/}
                {/*    <XAxis*/}
                {/*        dataKey="month"*/}
                {/*        stroke={theme.palette.text.secondary}*/}
                {/*        style={theme.typography.body2}*/}
                {/*    >*/}
                {/*        <Label*/}
                {/*            angle={0}*/}
                {/*            position="right"*/}
                {/*            style={{*/}
                {/*                textAnchor: 'middle',*/}
                {/*                fill: theme.palette.text.primary,*/}
                {/*                ...theme.typography.body1,marginTop:'10px'*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            Month*/}
                {/*        </Label>*/}
                {/*    </XAxis>*/}
                {/*    <YAxis*/}
                {/*        stroke={theme.palette.text.secondary}*/}
                {/*        style={theme.typography.body2}*/}
                {/*    >*/}
                {/*        <Label*/}
                {/*            angle={270}*/}
                {/*            position="left"*/}
                {/*            style={{*/}
                {/*                textAnchor: 'middle',*/}
                {/*                fill: theme.palette.text.primary,*/}
                {/*                ...theme.typography.body1,*/}
                {/*            }}*/}
                {/*        >*/}
                {/*           Users*/}
                {/*        </Label>*/}
                {/*    </YAxis>*/}
                {/*    <Line*/}
                {/*        isAnimationActive={false}*/}
                {/*        type="monotone"*/}
                {/*        dataKey="amount"*/}
                {/*        stroke={theme.palette.primary.main}*/}
                {/*        dot={false}*/}
                {/*    />*/}
                {/*</LineChart>*/}
            </ResponsiveContainer>
        </React.Fragment>
    );
}