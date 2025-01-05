import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const MyCard = () => (
  <Card
  
    hoverable
    style={{
      width: 240,
    }}
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
    <Meta description="www.instagram.comhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" />
    <Meta description="www.instagram.comhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" />    <Meta title="I am Talha and now I am thinking I'm back..."  />
  </Card>
);
export default MyCard;
