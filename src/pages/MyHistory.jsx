import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';


export const MyHistory = _ => (
    <>
        <h2>분석결과창</h2>
        <h3>사용자님의 분석결과는 다음과 같습니다</h3>
        <Timeline
            mode="alternate"
            items={[
                {
                    children: '분석결과 내용1 2023-08-28 15:20',
                },
                {
                    children: '분석결과 내용2 2023-08-29 15:20',
                    color: 'green',
                },
                {
                    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                    children: `분석결과 내용3 2023-08-30 15:20`,
                },
                {
                    color: 'red',
                    children: '분석결과 내용4 2023-09-01 15:20',
                },
                {
                    children: '분석결과 내용5 2023-09-02 15:20',
                },
                {
                    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                    children: '분석결과 내용6 2023-09-03 15:20',
                },
            ]}
        />
    </>
)