import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

function deaLoadingPage(props) {
  const { dvaLodingTest, changeCountAsync, loading } = props;
  function handlerClick() {
    changeCountAsync();
  }
  const isFetch = loading.effects['dvaLodingTest/changeCountAsync'];

  return (
    <React.Fragment>
      <div>count:{dvaLodingTest.count}</div>
      <Button onClick={handlerClick} loading={isFetch}>
        异步加数据
      </Button>
    </React.Fragment>
  );
}
const mapStateToProps = state => {
  return {
    loading: state.loading,
    dvaLodingTest: state.dvaLodingTest,
  };
};
const mapPropsToProps = {
  changeCountAsync: () => ({ type: 'dvaLodingTest/changeCountAsync' }),
};
export default connect(
  mapStateToProps,
  mapPropsToProps,
)(deaLoadingPage);
