import React, { useState } from 'react';
import { Layout, Input, Button, List, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './InMindSearch.css';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

export const InMindSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // 여기에서 실제 검색 로직을 추가합니다.
        // 검색 결과는 setSearchResults를 통해 설정합니다.
        // 이 예제에서는 가상 데이터를 사용하여 결과를 설정합니다.
        const results = [
            '내면의 평화 찾기: 명상과 정서 조절',
            '스트레스 해소와 내면의 조화',
            '자기 발견과 내면의 안정성',
            '심리 상담과 내면의 성장',
            '정신 건강과 내면의 조화',
        ];
        setSearchResults(results);
    };

    return (
        <>
            <h2>인마인드 탐색</h2>
            <Content className="content">
                <div className="search-container">
                    <Input
                        placeholder="검색어를 입력하세요"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button
                        type="primary"
                        icon={<SearchOutlined />}
                        onClick={handleSearch}
                    >
                        검색
                    </Button>
                </div>
                <div className="results-container">
                    <Title level={3}>검색 결과</Title>
                    <List
                        dataSource={searchResults}
                        renderItem={(item) => (
                            <List.Item>
                                <Paragraph>
                                    {item}
                                </Paragraph>
                                <Paragraph>
                                    {`"${item}"에 대한 내면의 평화를 찾는 방법과 관련된 정보입니다. 감정을 관리하고 심리적 안정성을 향상시키는 데 도움이 될 수 있는 자료와 가이드를 찾아보세요.`}
                                </Paragraph>
                            </List.Item>
                        )}
                    />
                </div>
            </Content>
        </>
    );
};
