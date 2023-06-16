import React from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Notification = () => {
  const handleButtonClick = () => {
    NotificationManager.success('Success message', 'Title', 3000);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Notification</button>
      <NotificationContainer />
    </div>
  );
};

export default Notification;
