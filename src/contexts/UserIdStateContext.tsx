import React, { Dispatch, SetStateAction, useContext, useState } from "react";

export type UserIdState = {
  /**
   * ログインしているユーザーのID
   */
  userId: string | null;
};

const initialState: UserIdState = {
  userId: null,
};

const UserIdStateContext = React.createContext<UserIdState>(initialState);
const SetUserIdStateContext = React.createContext<
  Dispatch<SetStateAction<UserIdState>>
>(() => {});

export const useUserIdState = () => {
  return useContext(UserIdStateContext);
};
export const useSetUserIdState = () => {
  return useContext(SetUserIdStateContext);
};

type UserIdStateProviderProps = {
  children: React.ReactNode;
};

export const UserIdStateProvider: React.FC<UserIdStateProviderProps> = (
  props
) => {
  const [userId, setUserId] = useState<UserIdState>({
    userId: null,
  });

  return (
    <UserIdStateContext.Provider value={userId}>
      <SetUserIdStateContext.Provider value={setUserId}>
        {props.children}
      </SetUserIdStateContext.Provider>
    </UserIdStateContext.Provider>
  );
};
