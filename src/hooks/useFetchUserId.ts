import { useEffect } from "react";
import liff from "@line/liff";
import { useSetUserIdState } from "../contexts/UserIdStateContext";

export const useFetchUserId = () => {
  const setUserId = useSetUserIdState();

  // マウント時にログインしてIdを取得
  useEffect(() => {
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login({}); // ログインしていなければ最初にログインする
      } else if (liff.isInClient()) {
        liff
          .getProfile() // ユーザ情報を取得する
          .then((profile) => {
            console.log(profile)
            const userId: string = profile.userId;
            setUserId({ userId });
          })
          .catch((error) => {
            console.error("Error sending message: " + error);
          });
      }
    });
  }, [setUserId]);
};
