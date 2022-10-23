import React, {useEffect, useState} from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, BarChart , CartesianGrid,LabelList , Bar , Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

import Axios from "axios";


// Generate user Data



function createData(userType, count) {
    return { userType,count };
}



export default function Chart() {
    const [dashDetail,setDashDetail] = useState([]);
    const shopCount =dashDetail.Shop_Count;
    const doctorCount =dashDetail.Doctor_Count;
    const petOwnerCount =dashDetail.PetOwner_Count;
    const clinicCount =dashDetail.Clinic_Count;

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/DashboardUsers").then((response) => {
            setDashDetail(response.data);
        });
    },[]);

    const data = [
        createData('PetOwner', petOwnerCount),
        createData('Clinic', clinicCount),
        createData('Shop', shopCount),
        createData('Doctor', doctorCount),

    ];

    const theme = useTheme();

    return (
        <React.Fragment style={{border: '1px solid green'}}>
            <Title>Today</Title>
            <ResponsiveContainer>
                <BarChart
                    width={830}
                    height={400}
                    data={data}
                    margin={{ top: 30, right: 70, left: 20, bottom: 10 }}
                    barGap={10}

                >
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey="userType" tick={true}  angle={0} label={{value:'Type',position: 'right'}} >
                    </XAxis>
                    <YAxis label={{ value: 'No of Users', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
                    <Bar dataKey="count" fill="#4695e3">
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