import React from 'react'
import Notiflix from 'notiflix';
import { ReactNotifications, Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const Notification = () => {
    const showAlerts = () => {
        Notiflix.Notify.success('Success alert!');
        Notiflix.Notify.failure('Failure alert!');
        Notiflix.Notify.warning('Warning alert!');
        Notiflix.Notify.info('Info alert!');
      };
      const notify = () => {
        Store.addNotification({
          title: "Notification Title",
          message: "This is a notification message.",
          type: "success", // 'default', 'success', 'info', 'warning', 'danger'
          insert: "top",
          container: "top-right", // Positioning
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000, // Duration in milliseconds
            onScreen: true,
          },
        });
      };
  return (
     <div className='bg-gray-500 rounded-2xl p-4'>
    <h1 className='text-2xl text-center'>Notiflix Alerts Example</h1>
    <button className='bg-red-500 p-3 rounded' onClick={showAlerts}>Show Alerts</button>
    <button onClick={notify}>Show Notification</button>
    
  </div>
  
  )
}

export default Notification