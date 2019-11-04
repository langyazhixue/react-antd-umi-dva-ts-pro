//  提取自定义Hook

// 
// 当我们想在两个函数之间共享逻辑时，我们会把它提取到第三个函数中。而组件和 Hook 都是函数，所以也同样适用这种方式。
// 1. 必须以　use 开头,这个约定非常重要
// 2. 在两个组件中使用相同的Hook会共享state吗？不会。自定义Hook是一种重用状态逻辑的机制，
// 所以每次使用自定义 Hook 时，其中的所有 state 和副作用都是完全隔离的。

// 3. 自定义 Hook 如何获取独立的 state？
// 每次调用 Hook，它都会获取独立的 state。
// 由于我们直接调用了 useFriendStatus，从 React 的角度来看，我们的组件只是调用了 useState 和 useEffect。 
// 正如我们在之前章节中了解到的一样，我们可以在一个组件中多次调用 useState 和 useEffect，它们是完全独立的。

import { useState, useEffect } from 'react';
function ChatAPI () {

}

ChatAPI.subscribeToFriendStatus = function() {

}
// 使用自定义Hook
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });
  return isOnline;
}

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

export default FriendStatus
