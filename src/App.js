import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { loadState, saveState } from "./utils/localStorage";
import { setUserName } from "./redux/slices/userSlice";
import { setTransaction } from "./redux/slices/transactionsSlice";
import { setFriends } from "./redux/slices/friendsSlice";
import Dashboard from "./components/Dashboard";
import Friends from "./components/Friends";
import Transactions from "./components/Transactions";
import UserName from "./components/UserName";
import Footer from "./components/footer";
import NewTransaction from "./components/NewTransaction";
import NewFriend from "./components/NewFriend";
import Header from "./components/Header"; 
import "./App.css";

function App() {
  const userName = useSelector((state) => state.user.name);
  const transactions = useSelector((state) => state.transactions.list);
  const friends = useSelector((state) => state.friends.list);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedState = loadState();
    if (storedState) {
      dispatch(setUserName(storedState.user.name));
      dispatch(setTransaction(storedState.transactions.list));
      dispatch(setFriends(storedState.friends.list));
    }
  }, [dispatch]);

  useEffect(() => {
    saveState({
      user: { name: userName },
      transactions: { list: transactions },
      friends: { list: friends }, 
    });
  }, [userName, transactions, friends]);

  return (
    <div className="container">
      <Header /> {/* Add Header component here */}
      {!userName ? (
        <UserName />
      ) : (
        <>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/new-transaction" element={<NewTransaction />} />
            <Route path="/new-friend" element={<NewFriend />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
