import React from 'react';
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import { WingBlank, WhiteSpace,Button,} from 'antd-mobile';


const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);


export default (): React.ReactNode => (
      <div style={{ padding: '15px 0' }}>
    <WingBlank><PlaceHolder /></WingBlank>
     <Button>default</Button><WhiteSpace />
    <Button disabled>default disabled</Button><WhiteSpace />

    <Button type="primary">primary</Button><WhiteSpace />
    <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

    <WhiteSpace size="lg" />
    <WingBlank size="md"><PlaceHolder /></WingBlank>

    <WhiteSpace size="lg" />
    <WingBlank size="sm"><PlaceHolder /></WingBlank>
  </div>
);
