/** @format */

"use client";
import {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type TNotification = {
  id: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
};

type TNotificationMangerProps = {
  children: ReactElement;
};

type TContext = {
  addNotification: ({}: Omit<TNotification, "id">) => void;
};
const NotificationMangerContext = createContext<TContext>({} as TContext);

const NotificationManger = ({ children }: TNotificationMangerProps) => {
  const [notifications, setNotification] = useState<TNotification[]>([]);

  useEffect(() => {
    showNotification();
  }, [notifications]);

  const addNotification = ({ message, type }: Omit<TNotification, "id">) => {
    const isExist = notifications.find((item) => item.id === message);
    if (isExist) return;
    setNotification((prev) => [...prev, { message, type, id: message }]);
  };

  const showNotification = () => {
    if (notifications.length === 0) return;
    notifications.forEach((alert) => {
      toast(alert.message, {
        type: alert.type,
        closeOnClick: true,
        autoClose: 4000,
        draggable: true,
        toastId: alert.id,
        // icon: true,
      });
      removeNotification(alert.id);
    });
  };

  const removeNotification = (id: string) => {
    setNotification((prev) => prev.filter((alerts) => alerts.id !== id));
  };

  const value = useMemo(
    () => ({
      addNotification,
    }),
    [addNotification]
  );

  return (
    <NotificationMangerContext.Provider value={value}>
      <ToastContainer limit={1} />
      {children}
    </NotificationMangerContext.Provider>
  );
};

function useNotificationManger() {
  const context = useContext(NotificationMangerContext);
  if (!context) {
    throw new Error("Context was used outside provider");
  }
  return context;
}

export { NotificationManger, useNotificationManger };
