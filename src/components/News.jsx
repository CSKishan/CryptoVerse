import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "http://coinrevolution.com/wp-content/uploads/202/06/cryptonews.jpg";

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();
  console.log(cryptoNews);

  if (!cryptoNews?.data) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.data.slice(0, simplified ? 6 : 24).map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
                <img
                  src={news?.thumbnail || demoImage}
                  width="200px"
                  height="200px"
                  alt="news"
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)} ...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar src={demoImage} alt="news" />
                  <Text className="provider-name">{}</Text>
                </div>
                <Text>
                  {moment(news.createdAt).startOf("seconds").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
