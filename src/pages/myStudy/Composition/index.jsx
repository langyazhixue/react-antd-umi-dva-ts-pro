import React, { Component } from 'react';
// 复合组件给与你⾜足够的敏敏捷去定义⾃自定义组件的外观和⾏行行为，
// 这种⽅方式更更 明确和安全。如果组件间有公⽤用的⾮非UI逻辑，将它们抽取为JS模块导⼊入使 ⽤用⽽而不不是继承它。
// 类似于 Vue 中的插槽
// $$typeof
function Card(props) {
  console.log(props.children)
  return <div xu="card">{props.children}</div>;
}

function Formbutton(props) {
  return (
    <div className="Formbutton">
      <button onClick={props.children.defaultBtns.searchClick}>默认查询</button>
      <button onClick={props.children.defaultBtns.resetClick}>默认重置</button>
      {props.children.btns.map((item, index) => {
        return (
          <button key={'btn' + index} onClick={item.onClick}>
            {item.title}
          </button>
        );
      })}
    </div>
  );
}

class CompositionTest extends Component {
  render() {
    return (
      <div>
        <Card>
          <p>我是内容1</p>
          <p>我是内容12</p>
        </Card>
        {/* <Card>
          <p>我是内容2</p>
        </Card> */}

        <Formbutton>
          {{
            defaultBtns: {
              searchClick: () => console.log('默认查询'),
              resetClick: () => console.log('默认重置'),
            },
            btns: [
              {
                title: '查询',
                onClick: () => console.log('查询'),
              },
              {
                title: '重置',
                onClick: () => console.log('重置'),
              },
            ],
          }}
        </Formbutton>
      </div>
    );
  }
}

export default CompositionTest;
