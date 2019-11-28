import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './index.less';
class KTreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  handleExpanded = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };
  render() {
    const { title, children } = this.props.data;
    const { expanded } = this.state;
    const hasChildren = children && children.length > 0;
    return (
      <div>
        <div className={styles.nodeInner} onClick={this.handleExpanded}>
          {hasChildren && (
            <i className={classnames(styles.tri, expanded ? styles.triOpen : styles.triClose)}></i>
          )}
          <span>{title}</span>
        </div>
        {expanded && hasChildren && (
          <div className={styles.children}>
            {children.map(item => {
              return <KTreeNode key={item.key} data={item} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

export default KTreeNode;
